import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import HelloWorld from "./HelloWorld.jsx";
import Container from "./Cointainer.jsx";
import TodoList from "../todolist/TodoList.jsx";
import Table from "../table/Table.jsx";
import AlertButton from "../button/AlertButton.jsx";
import MyButton from "../button/MyButton.jsx";
import Toolbar from "../button/Toolbar.jsx";
import SearcForm from "../form/SearchForm.jsx";
import SayHelloForm from "../form/SayHelloForm.jsx";
import Counter from "../form/Counter.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
                <TodoList/>
                <Table/>
                <AlertButton text="Click Me" message="You click me"/>
                <MyButton text="Smash me" onSmash={()=>{alert("Click Me")}} />
                <Toolbar onClick={(e)=>{
                    e.stopPropagation();
                    alert("You click toolbar");
                }}/>
                <SearcForm/>
                <SayHelloForm/>
                <Counter/>
                <Counter/>

            </Container>
        </StrictMode>
    )