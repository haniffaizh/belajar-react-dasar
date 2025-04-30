import './HelloWorld.css'

export default function HelloWorld(){
    const props ={
        text:'Hello World',
    }
    return(
        <div>
            <HeaderHelloWorld {...props} />
            <ParagraphHelloWorld/>

        </div>
    )
}

function HeaderHelloWorld({text = "Ups, lupa kasih text"}){
    return(
        <h1 className="title">{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld() {
    const text= 'Selamat belajar react js';

    return(
        <p className="content">{text.toLocaleLowerCase()}</p>
    )
}