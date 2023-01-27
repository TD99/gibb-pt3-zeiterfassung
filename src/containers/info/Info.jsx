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
              <div className="questionandAnswer2">
                <h1>Werdet ihr nachdem Release für die Applikation mehrere Updates veröffentlichen?
                </h1>
                <p>Weil wir noch in einer Schule/Lehre sind und immer neue Informatikprojekte haben 
                  ist es für uns schwer ein Projekt aktuell zu halten und neue Funktionen für es zu programmieren. 
                  Wenn es aber nachher eine grosse Nachfrage hat, kann man es sich überlegen.
                </p>
              </div>

              <div className="questionandAnswer3">
                <h1>Gibt es die Applikation in mehreren Sprachen und wenn ja welche?</h1>
                <p>Die Applikation entwickeln wir original auf Deutsch. Die Funktion das man 
                  verschiedene Sprachen auswählen kann haben wir nicht geplant, denn das Projekt 
                  ist für die Klasse und Schule, die als Hauptsprache Deutsch hat.
                </p>
              </div>
            </div>
            <div className='info-help'>
                <h1>Hilfe</h1>
             Bei diesem Abschnitt probieren wir eure Probleme zu beheben. 
             Diese Applikation hat 6 Seiten. Man wird von den Logindaten her zur richtigen Seite 
             zugewiesen.
            </div>
        </div>
    </div>
  )
}

export default Info