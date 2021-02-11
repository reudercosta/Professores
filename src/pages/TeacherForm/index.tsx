import React from 'react';
import Input from '../../compontents/Input';
import PageHeader from '../../compontents/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';
import Textarea from '../../compontents/Textarea';

function TeacherForm(){
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Que incrível que você quer dar aulas."
            description="O primeiro passo é preencher o formulário de Inscrição"
            />

            <main>
                <fieldset>
                <legend>Seus dados</legend>
                <Input name="name" label="Nome Completo"/>
                <Input name="avatar" label="Avatar"/>
                <Input name="whatsapp" label="Whatsapp"/>
                <Textarea name="bio" label="Biografia"/>
                </fieldset>

                <fieldset>
                <legend>Sobre a Aula</legend>
                <select name="subject" label="Matéria"/>
                <Input name="cost" label="Custo da sua hora por aula"/>
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}
export default TeacherForm;