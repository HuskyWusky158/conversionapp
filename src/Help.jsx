import './App.css';
import AppBar from './components/AppBar';
import HeaderForHelpPage from './components/HeaderForHelpPage'
function Help() {

  return (
    <div className="App">
      <div>
      <AppBar />
      <HeaderForHelpPage/>
      <h2>
        Need help?
      </h2>
      <h3>
        <p>- To enter data, type in the text box or use the digital keyboard.</p>
        <p>- Select the measurement you're converting from the "from type" drop-down menu.</p>
        <p>- Select the measurement you're converting to from the "type to" drop-down menu.</p>
        <p>- Click the "calculate" button for the calculation.</p>
        <p>- Your result will appear in the result box.</p>
        <p>- To clear your text box, press "clear" and then "yes" to delete the data.</p>
        </h3>
      </div>
      <div>
      <h2>Video Example</h2>
      <video controls width="1000" height="600" style={{ width: '1000px', height: '600px' }}>
      <source src="OfficialHowTo.mp4" type="video/mp4" />
      </video>
    </div>
    </div>
  )
}

export default Help

