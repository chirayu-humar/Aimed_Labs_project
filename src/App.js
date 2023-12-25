// import './App.css';
import styled from 'styled-components'
import Header from './components/Header'
import Home from './components/Home'
import BrandPartners from './components/BrandPartners'
import Bottom from './components/BottomDiv'

const OuterMostDiv = styled.div`
  // *{
  //   margin: 0;
  //   padding: 0;
  //   box-sizing: border-box;
  // } 

  body {
    margin: 0; /* Remove default margin on body */
    overflow-x: hidden; /* Hide horizontal scrolling for the entire page */
  } 

  text-align: center;
  background-color: blue;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 600px) {
    text-align: center;
    background-color: red;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    overflow-y: scroll;
    overflow-x: visible;
    max-width: 100vw;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @mdeia (min-width: 601px) {
    margin: 0;
    padding: 0;
 }
`

const DivMiddle = styled.div`
  color: var(--text-secondary, #787878);
  letter-spacing: 0.5px;
  max-width: 328px;
  font: 600 64px/140% Poppins, sans-serif;
  background-color: white;
  min-width: 100%;
  @media (max-width: 600px) {
    min-width: 100%;
  }
`;

function App() {
  return (
		// <div className="App">
		//   <p>temp</p>
		// </div>
		<OuterMostDiv>
			<Header />
			<Home />
			<DivMiddle>
				<span style={{ fontSize: "24px", lineHeight: "33.599998474121094px" }}>
					Trusted
				</span>{" "}
				<span
					style={{
						fontWeight: 500,
						fontSize: "18px",
						lineHeight: "25.19999885559082px",
					}}
				>
					by brands & startups
				</span>
			</DivMiddle>
      <BrandPartners />
      <Bottom />
		</OuterMostDiv>
	);
}

export default App;
