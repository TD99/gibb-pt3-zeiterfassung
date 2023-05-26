import './info.css';

const Info: React.FC = () => {
    return (
        <div className='Info'>
            <div className='Info-header'>
                <h1>Informationen und Hilfe</h1>
                <p>Auf dieser Seite gibt es Hilfe und Informationen über die Zeiterfassung. Die Zeiterfassung ist ein Projekt 
                von Schüler aus der IM21A. Eine Gruppe aus tollen Informatiker hatten in der gibb die 
                Zeit dazu gehabt, dieses Projekt fertigzustellen. Auch wenn es nicht benotet wird haben wir alle 
                viel Erfahrung mit diesem Projekt erwirtschaftet und hatten spass daran zu arbeiten.
                </p>
            </div>
            <div className="Info-impressum">
                <h1>Impressum</h1>
                <table className='impressum-table'>
                    <tr>
                        <td className='table-title'>Schule</td>
                        <td>gibb Bern und BWD</td>
                    </tr>
                    <tr>
                        <td className='table-title'>Mitglieder</td>
                        <td>Tim Dürr, Nicolas Thöni, David Esteves Rodrigues, Brendan Demierre, Guiseppe Greco, Oliver Lochner</td>
                    </tr>
                    <tr>
                        <td className='table-title'>Mail des Verantwortlichen</td>
                        <td>kurt.jaermann@gibb.ch</td>
                    </tr>
                    <tr>
                        <td className='table-title'>Datum</td>
                        <td>10.02.2023</td>
                    </tr>
                    <tr>
                        <td className='table-title'>Adresse der Schule gibb</td>
                        <td>Lorrainestrasse 3000 Bern</td>
                    </tr>
                </table>
                
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
                <p>Das Zeiterfassungstool hat kein Support, hier wäre aber eine kleine Dokumentation</p>
            </div>
        </div>
    )
}

export default Info;