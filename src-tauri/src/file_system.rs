
use serde::{Deserialize, Serialize};
use std::fs;
use open;

#[tauri::command]
pub fn open_file(path_to_file: &str) -> Result<(), String> {
    match open::that(path_to_file) {
        Ok(_) => Ok(()),
        Err(e) => Err(format!("Failed to open file: {}", e)),
    }
}

#[derive(Serialize, Deserialize)]
pub struct File {
    name: String,
    path: String,
}

#[derive(Serialize, Deserialize)]
pub struct Directory {
    name: String,
    path: String,
}

#[derive(Serialize, Deserialize)]
pub struct DirectoryListing {
    files: Vec<File>,
    folders: Vec<Directory>,
}

#[tauri::command]
pub fn read_dir(path_to_read: &str) -> Result<DirectoryListing, String> {
    let mut files = Vec::new();
    let mut folders = Vec::new();

    match fs::read_dir(path_to_read) {
        Err(e) => return Err(format!("Error reading directory: {}", e)),
        Ok(paths) => {
            for path in paths {
                let entry = path.unwrap();
                let file_name = entry.file_name();
                let path_str = file_name.to_string_lossy().to_string();
                let path = entry.path();

                if path.is_dir() {
                    folders.push(Directory {
                        name: path_str,
                        path: path.to_string_lossy().to_string(),
                    });
                } else {
                    files.push(File {
                        name: path_str,
                        path: path.to_string_lossy().to_string(),
                    });
                }
            }
        }
    }

    Ok(DirectoryListing { files, folders })
}
