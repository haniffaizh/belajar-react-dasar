import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import HelloWorld from "./HelloWorld.jsx";
import Container from "./Cointainer.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
            </Container>
        </StrictMode>
    )