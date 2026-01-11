# Project Management App (TypeScript)

A simple Project Management application built using **TypeScript**.

## Project Refactored Using SOLID Principles

this is a **Typsescript-based Drag & Drop Project Managment application**.  

Initially, the project worked functionally but the codebase had:
- Tightly coupled logic
- Mixed responsibilities (UI, state, validation, behavior)
- Low scalability and maintainability

I **refactored the entire project by applying SOLID principles**, focusing on clean architecture, separation of concerns, and long-term scalability.

---

## 📂 Folder Structure

src/
├── models/
├── state/
├── ui/
├── drag-drop/
├── validation/
└── app.ts

Each folder represents a **clear responsibility**, aligned with SOLID design principles.

---

## 📁 models/

### Purpose
Contains **pure data models** used across the application.

### Why it exists
- Centralizes data definitions
- Keeps models independent from UI and state logic

### SOLID Principles
- **SRP**: Models only define data structure
- **OCP**: Models can be extended without modifying dependent code

---