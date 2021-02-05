import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/Whatsapp.svg';


function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars.githubusercontent.com/u/52551375?s=400&u=28e5122fb7b7a0c780283a4a25ac6839fe014dea&v=4" alt=""/>
        <div>
            <strong> Reuder Cerqueira</strong>
            <span>Química</span>
        </div>
        </header>
        <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/><br/>
            Apaixonado por explodir coisas em laboratório e em mudar a vida das pessoas através de experiências.
        </p>
        <footer>
            <p>
            Preço/hora
            <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src="{whatsappIcon}" alt="Whatsapp"/>
            </button>
        </footer>
   </article>
    );
}
export default TeacherItem;