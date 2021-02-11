import React from 'react';
import PageHeader from '../../compontents/PageHeader';
import TeacherItem from '../../compontents/TeacherItem'
import Input from '../../compontents/Input';

import './styles.css';




function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
           <PageHeader title="Esses são os proffys disponíveis.">
           <form id="search-teachers">
                 <Input name="subject" label="Matéria"/>
                 <Input name="week_day" label="Dia da Semana"/>
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