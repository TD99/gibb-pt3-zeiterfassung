import React from 'react'

const Info = () => {
  return (
    <div className='info'>
        <div className='info-container'>
            <div className='information'>
            <h1>Informationen</h1>
            <p>Die Zeiterfassung ist ein Projekt von der IM21A. Im Praxisstraining (jede 
                Woche ein halben Tag) hatten wir Zeit zur Verfügung dieses Projekt zu erstellen.
                Die Arbeit wurde eingeteilt in verschiedenen Teilgruppen. Eine Gruppe arbeitete mit Raspberry PI 
                an die Hardware, die andere entwickelte das Backend, und die letzte erstellte ein Frontend mit React.
                
            </p>
            </div>
            <div className='info-faq'>
              <h1>FAQ</h1>
              <div className='questandAnwser1'>
                <h2>Wird die Applikation für die Öffentlichkeit auch verfügbar sein?</h2>
                <p>Bis jetzt planen wir die Applikation nur für unsere Schule. Die Idee unser 
                  Projekt für andere Schulen und Betriebe zur Verfügung zu stellen kamm noch nicht und 
                  wir hatten darüber noch keine Gedanken und Vorarbeiten geschafft.
                  
                </p>

              </div>
            </div>
            <div className='info-help'>
                <h1>Hilfe</h1>
             Bei diesem Abschnitt probieren wir eure Schwierigkeiten zu beheben. 
             
            </div>
        </div>
    </div>
  )
}

export default Info