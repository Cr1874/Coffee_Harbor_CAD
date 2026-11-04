# Coffee_Harbor_CAD

CA for Cloud Application Development module, The application is for a brand new coffee shop that has opened which brings the taste of Sydney to Dublin. The idea of this application is to help customers browse drinks and place collection orders, while giving staff a way to manage orders.

#  Current Implementation
Initial FastAPI product endpoints have been added, small temporary fictional menu data to display three different types of coffees.
Angular menu component with names, prices and availability of coffees.
Loading/error displayed when data can't be reached.
an Angular service that requires data of products from the API.
dev proxy that connects The Angular to FastAPI.

# Technologies used
Backend: Python, FastAPI and Pydantic.
Frontend: Typescript, HTML, CSS and Angular
Testing: Pytest and Vitest
GitHub, VsCode

# Prerequisites
Python 3.13, Node.js 26 and npm.

# Addresses
Application: http://localhost:4200
Product API: http://127.0.0.1:8000/api/products
API documentation: http://127.0.0.1:8000/docs

The frontend development server forwards `/api/` requests to the FastAPI on port 8000

# Project structure
`backend/app/`: API routes, schemas and temporary data.
`backend/tests/`: backend tests.
`frontend/`: Angular application and frontend tests.
