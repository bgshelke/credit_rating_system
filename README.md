# RMBS Credit Rating System

## Overview

This project is a **Full-Stack Credit Rating System** for **Residential Mortgage-Backed Securities (RMBS)**. It allows users to input mortgage data through a frontend interface, process credit ratings based on predefined business rules in the backend, and store mortgage details in a **MySQL** database.

## Features

### **Frontend (React or Angular)**

- Input mortgage details (credit score, loan amount, property value, income, etc.).
- Submit mortgage data to the backend for processing.
- Display calculated **credit ratings (AAA, BBB, or C)**.
- List all mortgages stored in the database (with options to edit or delete).
- Validate inputs and show error messages.

### **Backend (Django & Django REST Framework)**

- REST API for handling mortgage data and calculating credit ratings.
- Business logic to determine risk score based on:
  - **Loan-to-Value (LTV) Ratio**
  - **Debt-to-Income (DTI) Ratio**
  - **Credit Score**
  - **Loan Type**
  - **Property Type**
  - **Average Credit Score Adjustment**
- Logging module configured for debugging and monitoring.
- Unit testing for API and business logic.

### **Database (MySQL)**

- Stores all mortgage details.
- Supports retrieval, editing, and deletion of records.

## Installation & Setup

### **1. Clone the Repository**

```sh
git clone https://github.com/your-repo-name/rmbs-credit-rating.git
cd rmbs-credit-rating
```

### **2. Backend Setup (Django)**

#### **Create & Activate Virtual Environment**

```sh
pip install virtualenv
virtualenv venv
venv\Scripts\activate

```

#### **Install Dependencies**

```sh
pip install -r requirements.txt
```

#### **Configure Environment Variables**

Create a `.env` file in the `backend/` directory:

```ini
DATABASE_NAME='credit_rating'
DATABASE_USER='root'
DATABASE_PASSWORD='root'
DATABASE_HOST='localhost'
DATABASE_PORT='3306'
LOGGING_PATH=logs/django_errors.log
```

#### **Apply Migrations & Run Server**

```sh
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### **3. Frontend Setup (React )**

Follow the steps for your chosen framework:

#### **React Setup**

```sh
cd frontend
npm install
npm install react-hook-form react-router-dom axios
npm start
```

## API Endpoints

### **1. Mortgage API**

| Method   | Endpoint               | Description                                  |
| -------- | ---------------------- | -------------------------------------------- |
| `POST`   | `/api/mortgages/`      | Add a new mortgage & calculate credit rating |
| `GET`    | `/api/mortgages/`      | Retrieve all mortgages                       |
| `PUT`    | `/api/mortgages/<id>/` | Update mortgage details                      |
| `DELETE` | `/api/mortgages/<id>/` | Delete a mortgage record                     |
| `GET`    | `/api/credit-rating/`  | Retrieve credit Rating                       |

## Credit Rating Algorithm

| **Risk Factor**         | **Condition**    |
| ----------------------- | ---------------- |
| LTV > 90%               | Add 2 points     |
| LTV > 80%               | Add 1 point      |
| DTI > 50%               | Add 2 points     |
| DTI > 40%               | Add 1 point      |
| Credit Score ≥ 700      | Subtract 1 point |
| Credit Score < 650      | Add 1 point      |
| Fixed Loan              | Subtract 1 point |
| Adjustable Loan         | Add 1 point      |
| Condo Property          | Add 1 point      |
| Avg. Credit Score ≥ 700 | Subtract 1 point |
| Avg. Credit Score < 650 | Add 1 point      |

### **Final Rating Based on Score**

- **AAA** (Highly Secure) → Score **≤ 2**
- **BBB** (Medium Risk) → Score **3 to 5**
- **C** (High Risk) → Score **> 5**

## Testing

To run unit tests for the backend:

```sh
python manage.py test
```
