import React from 'react'
import './info.css'


const Info = () => {
  return (
    <div className='Info'>
      <div className='Info-header'>
        <p><h1>Informationen und Hilfe</h1></p>
        <p>Auf dieser Seite gibt es Hilfe und Informationen über die Zeiterfassung. Die Zeiterfassung ist ein Projekt 
          von Schüler aus der IM21A. Eine Gruppe aus tollen Informatiker hatten in der gibb die 
          Zeit dazu gehabt, dieses Projekt fertigzustellen. Auch wenn es nicht benotet wird haben wir alle 
          viel Erfahrung mit diesem Projekt erwirtschaftet und hatten spass daran zu arbeiten.
        </p>
      </div>
      <div className="Info-impressum">
        <p><h1>Impressum</h1></p>
        <ul>
          <li>Schule: gibb Bern und BWD</li>
          <li>Mitglieder: Tim Dürr, Nicolas Thöni, David Esteves Rodrigues, Brendan Demierre, Guiseppe Greco, Oliver Lochner</li>
          <li>Mail des Verantwortlichen: kurt.jaermann@gibb.ch</li>
          <li>Datum: 10.02.2023</li>
          <li>Adresse der Schule gibb: Lorrainestrasse 3000 Bern</li>

        </ul>
        <p>Wir haben kein offizielles copyright bitte aber nicht die Applikation weiterverkaufen oder zu kopieren ausser sie haben ein Einverständnis von den Entwickler</p>
      </div>

      <div className='Info-FAQ'>
        <h1>FAQ</h1>
        <h2>Wird die Software auch für andere Schulen veröffentlicht?</h2>
        <p>Eher nicht. Weil wir selber wenig Zeit haben um dies zu überarbeiten und es bräuchte auch 
          eine starke Koordination mit anderen Schulen, werden wir dies nicht für andere Schulen oder Unternehmen zur Verfügung stellen. 
        </p>

        <h2>Habt ihr vor weiter an diesem Projekt zu arbeiten?</h2>
        <p>Die Warscheinlichkeit dass wir weiter an der Zeiterfassung arbeiten ist eher gering. 
          Wir müssen selber Projekte erarbeiten und haben sonst wenig Zeit. 
        </p>

        <h2>Macht ihr die Applikation auch für Handys?</h2>
        <p>Die Software sollte auch auf Handys funktionieren und responsive sein. Es ist einfach eine 
          Frage von der Zeit.
        </p>

        
      </div>

      <div className="Info-help">
        <h1>Hilfe</h1>
         
        </div>
    </div>
  )
}

export default Info