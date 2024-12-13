# Backend Fish2Eat API Documentation

Powered by:  

![gcp](https://github.com/user-attachments/assets/ba3f60e8-6002-4ea7-a2be-465835db69f9)

Prerequisites Before you begin, make sure you have the following software installed on your system:

- **Node.js (version 18 or above)**

- **NPM (Node Package Manager)**

---

## Overview

### Title: Fish2Eat Test API
**Description:**  
This API supports fish data management, image-based predictions using machine learning models, and fish recipe provision.  
**Version:** 1.0.0  
**Base URL:**  
- **REST API**: `https://fish2eat-api2-512565326395.asia-southeast2.run.app`  
- **ML API**: `https://ml-backend-b5eefj7raq-et.a.run.app`

---

## Authentication
Dua metode autentikasi tersedia:
- **Basic Authentication**
- **Digest Authentication**

---

## Endpoints

### 1. **Fish Details Endpoints**

#### GET `/api/fish`
**Description:**  
Mengambil semua data ikan dan detailnya (metode memasak, bahan, instruksi, dan gambar).  

**Response:**
```json
[
  {
    "id": "fishID1",
    "name": "Clownfish",
    "scientificName": "Amphiprioninae",
    "habitat": "Marine",
    "description": "A small, colorful fish found in coral reefs.",
    "imageURL": "https://example.com/clownfish.jpg"
  }
]
```

#### POST `/api/fish`
**Description:**
Menambahkan data ikan baru ke database.

**Request Body:**
```json
{
  "id": "fishID3",
  "name": "Mujair",
  "scientificName": "Mozambique tilapia",
  "habitat": "Freshwater",
  "description": "This species is silver to gray with between two and seven black blotches along the side of the body.",
  "imageURL": "https://example.com/fish.jpg"
}
```
**response :**
```json
{
  "message": "Fish added successfully!"
}
```

#### GET `/api/fish/{id}`
**Description:**
Mengambil detail ikan berdasarkan ID.

**Response (Contoh untuk fishID1):**
```json
{
  "id": "fishID1",
  "name": "Clownfish",
  "scientificName": "Amphiprioninae",
  "habitat": "Marine",
  "description": "A small, colorful fish found in coral reefs.",
  "imageURL": "https://example.com/clownfish.jpg"
}
```
#### PUT `/api/fish/{id}`
**Description:**
Memperbarui detail ikan berdasarkan ID.

**Request Body:**
```json
{
  "name": "Mujair",
  "scientificName": "Mozambique tilapia",
  "habitat": "Freshwater",
  "description": "Updated description.",
  "imageURL": "https://example.com/updated.jpg"
}
```
Response:
```json
{
  "message": "Fish updated successfully!"
}
```

#### DELETE `/api/fish/{id}`
**Description:**
Menghapus data ikan dari database.

**Response:**
```json
{
  "message": "Fish deleted successfully!"
}
```
---
### 2. **Recipe Endpoints**

#### GET `/api/recipes`
**Description:**
Mengambil semua resep masakan ikan.

**Response:**
```json
[
  {
    "id": "recipeID1",
    "cookMethode": "Fried",
    "ingredient": "List of ingredients...",
    "instruction": "Cooking instructions...",
    "imageURL": "https://example.com/recipe.jpg",
    "fishId": "fishID1"
  }
]
```
#### POST `/api/recipes`
**Description:**
Menambahkan resep baru.

**Request Body:**
```json
{
  "cookMethode": "Roast",
  "fishId": "fishID2",
  "ingredient": "List of ingredients...",
  "instruction": "Cooking instructions...",
  "imageURL": "https://example.com/recipe.jpg"
}
```

**Response:**
```json
{
  "message": "Recipe added successfully!"
}
```

- #### GET `/api/recipes/{id}`
Description:
Mengambil detail resep berdasarkan ID.

- #### PUT `/api/recipes/{id}`
Description:
Memperbarui detail resep berdasarkan ID.

- #### DELETE `/api/recipes/{id}`
Description:
Menghapus resep dari database.

---

### 3. **Ml API Endpoints**
#### POST `/predict-fish-info/`
**Description:**
Menganalisis gambar ikan untuk memprediksi kelas, detail ilmiah, dan resep terkait.

**Request Body:**
```json
{
  "file": "string"
}
```
**Response:**
```json
{
  "prediction": {
    "class": "Sapu-sapu",
    "confidence": "99.94%"
  },
  "fish": {
    "id": "fishID10",
    "name": "Sapu-sapu",
    "scientificName": "Hypostomus plecostomus",
    "habitat": "Freshwater",
    "description": "Brown to olive-brown body with darker spots...",
    "imageURL": "https://example.com/sapu-sapu.jpg"
  },
  "recipes": [
    {
      "id": "recipeID1",
      "cookMethode": "Roast",
      "ingredient": "1/2 cup all-purpose flour...",
      "instruction": "In a shallow bowl or deep plate...",
      "imageURL": "https://example.com/recipe.jpg",
      "fishId": "fishID10"
    }
  ]
}
```
#### GET `/fish-info/{name}`
**Description:**
Mengambil detail ikan dan resep berdasarkan nama ikan.

**Response:**
```json
{
  "fish": {
    "id": "fishID6",
    "name": "Mujair",
    "scientificName": "Oreochromis mossambicus",
    "habitat": "Freshwater",
    "description": "This species is silver to gray with...",
    "imageURL": "https://example.com/mujair.jpg"
  },
  "recipes": []
}
```



