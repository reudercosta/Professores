import React from 'react';
import PageHeader from '../../compontents/PageHeader';
import TeacherItem from '../../compontents/TeacherItem'
import Input from '../../compontents/Input';
import Select from '../../compontents/Select';

import './styles.css';




function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
           <PageHeader title="Esses são os proffys disponíveis.">
           <form id="search-teachers">
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
                                
                 <Input type="time" name="time" label="Hora"/>
           </form>
           </PageHeader>
           <main>
              <TeacherItem/>
              <TeacherItem/>
              <TeacherItem/>
              <TeacherItem/>
              
           </main>
        </div>
          
    )
}
export default TeacherList;