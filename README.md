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

## 📁 state/

### Purpose
Manages **global application state**.

### Why it exists
- Avoids passing data manually between components
- Decouples UI from data storage logic

### What it contains
- `project-state.ts` – Concrete state management
- `project-state.interface.ts` – State abstraction

### SOLID Principles
- **SRP**: Handles only state logic
- **DIP**: UI depends on state interfaces, not implementations
- **OCP**: State can be replaced (API, DB) without changing UI

---

## 📁 ui/

### Purpose
Contains all **UI components**.

### Why it exists
- Separates DOM logic from business logic
- Improves reusability and readability

### What it contains
- `component.ts` – Base abstract UI component
- `project-input.ts` – User input handling
- `project-list.ts` – Project list rendering
- `project-item.ts` – Individual project rendering

### SOLID Principles
- **SRP**: Each component has one UI responsibility
- **LSP**: Components safely extend the base component
- **OCP**: New UI components can be added without modifying existing ones

---