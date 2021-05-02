import React from 'react'

function Portfolio() {
    return (
        <div style={{ 'width': '100%'}}>
            <h1 style={{ 'text-align': 'center', 'magin-bottom': '5px' }}>Portfolio</h1>
            <table style={{'margin':'auto'}}>
                <th>Languages/Framework
                    <tr>HTML</tr>
                    <tr>CSS</tr>
                    <tr>SCSS</tr>
                    <tr> JavaScript</tr>
                    <tr>React JS</tr>

                </th>
                <th>Proficiency
                    <tr>80%</tr>
                    <tr>70%</tr>
                    <tr>70%</tr>
                    <tr>70%</tr>
                    <tr>70%</tr>

                </th>
            </table>
            <div>
                <h3 style={{'text-align':'center','margin-top':'3%','margin-bottom':'3%'}}>Projects:(links)</h3>
                
                    <div><a href='http://jesuscarescharity.com'>Jesus Cares charity</a></div>
                    <div><a href='http://App.swirge.com'>App.swirge landing page</a></div>
                    <div><a href='http://jesuscarescharity.com'>Jesus Cares charity</a></div>
                
            </div>
            <div>
                <h3 style={{ 'text-align': 'center', 'margin-top': '3%', 'margin-bottom': '3%' }}>Work Experience:</h3>
                <div>Front-end developer @ Doitdigital Hub</div>
                <div>junior front-end developer @ swirge</div>
            </div>
            <div>
                <h3 style={{ 'text-align': 'center', 'margin-top': '3%', 'margin-bottom': '3%' }}>Tools:</h3>
                 <div>Visual Studio Code</div>
            </div>
        </div>
    )
}
export default Portfolio