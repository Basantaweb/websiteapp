// src/api/apiClient.ts
import axios from "axios";

// Base URL from .env
const API_BASE_URL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Optional: Add interceptors here for auth, logging, etc.

export default apiClient;
