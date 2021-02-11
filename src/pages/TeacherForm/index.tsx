import React, { useState} from 'react';
import Input from '../../compontents/Input';
import PageHeader from '../../compontents/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../compontents/Textarea';
import Select from '../../compontents/Select';

import './styles.css';


function TeacherForm(){
const [scheduleItems, setScheduleItems] = useState( [
    {week_day: 0, from: '8:00 AM', to: '4:00 PM'},
    {week_day: 2, from: '10:00 AM', to: '6:00 PM'},
]);

function addNewScheduleItem(){
    setScheduleItems([
        ...scheduleItems,
        {week_day: 0, from: '',  to:''}
    ]);
    
}

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
                <Select 
                    name="subject" 
                    label="Matéria"
                    options = {[
                        { value: 'Artes', label: 'Artes' },
                        { value: 'Biologia', label: 'Biologia' },
                        { value: 'Ciencias', label: 'Ciencias' },
                        { value: 'Matemática', label: 'Matemática' },
                        { value: 'Química', label: 'Química' },
                        { value: 'Física', label: 'Física' },
                        { value: 'Português', label: 'Português' },
                        { value: 'Geografia',label: 'Geografia' },
                        { value: 'História', label: 'História' },
                    ]}
                />
                
                <Input name="cost" label="Custo da sua hora por aula"/>
                </fieldset>
                <fieldset>
                    <legend>Horários Disponíveis
                    <button type="button" onClick={addNewScheduleItem}>
                        + Novo Horário
                    </button>
                    </legend>
                    {scheduleItems.map(scheduleItem =>{
                        return(
                     <div key={scheduleItem.week_day } className="schedule-item">
                        <Select 
                        name="week_day" 
                        label="Dias da Semana"
                        options = {[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-Feira' },
                            { value: '2', label: 'Terça-Feira' },
                            { value: '3', label: 'Quarta-Feira' },
                            { value: '4', label: 'Quinta-Feira' },
                            { value: '5', label: 'Sexta-Feira' },
                            { value: '6', label: 'Sábado' },
                            
                                ]}
                        />
                    <Input name="from" label="Das" type="time"/>
                    <Input name="to" label="Até" type="time"/>
                    
                    </div>
                        )
                    })}
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