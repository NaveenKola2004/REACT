import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Heart } from "./Heart";

createRoot(document.getElementById("nerves")).render(
    <StrictMode>
        <Heart />
    </StrictMode>
)