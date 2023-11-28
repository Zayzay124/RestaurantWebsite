import { useState } from "react";
export default function Page() {
  return(
    <div>
      <TopBox />
      <TextArea />
      <AllOfferBox />
      <PosSection />
      <Application />
      <Submit />
      <BottomText />
    </div>
  );
}

/* Leaf image */
function LeafIMG() {
  return(
    <img style = {{
      width: 230, 
      height: 805}} 
      src = './Leaf.png' />
  );
}

/* Submit button pop up */
function PopUp(){
  return(
    <div style = {{
      width: 250, 
      height: '100%', 
      padding: 12, 
      background: '#691E06', 
      boxShadow: '0px 8px 16px -4px rgba(26, 26, 26, 0.22)', 
      borderRadius: 8, 
      justifyContent: 'flex-start', 
      alignItems: 'center', 
      gap: 8, 
      display: 'inline-flex'}}>
      <div style = {{
        color: '#E3E3E3', 
        fontSize: 20, 
        background: '#691E06',
        padding: 10,
        wordWrap: 'break-word'}}>Application submitted</div>
    </div>
  );
}

/* Contact us bottom */
function BottomText() {
  return(
    <div style = {{
      width: '90%', 
      height: '100%', 
      padding: 40, 
      justifyContent: 'center', 
      alignItems: 'center', 
      display: 'inline-flex'}}>
      <div style = {{
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        gap: 4, 
        display: 'flex'}}>
        <div style = {{
          color: '#691E06', 
          fontSize: 25, 
          fontWeight: '450', 
          wordWrap: 'break-word'}}>
            To learn more about careers and opportunities,
        </div>
        <div style = {{
          justifyContent: 'flex-start', 
          alignItems: 'flex-start', 
          display: 'flex'}}>
          <div style = {{
            color: '#BB4D00', 
            fontSize: 25, 
            fontWeight: '450', 
            textDecoration: 'underline', 
            wordWrap: 'break-word'}}>contact us!</div>
        </div>
      </div>
    </div>
  );
}

/* Dropdown menu item */
function DDItem({label}) {
  return(
    <div style = {{
      width: 150, 
      height: '90%', 
      paddingLeft: 6, 
      paddingRight: 6, 
      borderRadius: 4, 
      background: '#CA5310',
      justifyContent: 'flex-start', 
      alignItems: 'center', 
      display: 'inline-flex'}}>
      <div style = {{
        flex: '1 1 0', 
        height: 32, 
        padding: 6, 
        borderRadius: 8, 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        gap: 4, 
        background: '#CA5310',
        display: 'flex'}}>
        <div style = {{
          flex: '1 1 0', 
          background: '#CA5310',
          color: 'white', 
          fontSize: 20, 
          fontWeight: '450',
          wordWrap: 'break-word'}}>{label}</div>
      </div>
    </div>
  );
}

/* Entire dropdown menu */
function DDOptions() {
  return(
    <div style = {{
      width: 200, 
      height: '100%', 
      paddingTop: 10, 
      paddingBottom: 10, 
      background: '#CA5310', 
      boxShadow: '0px 4px 6px -2px rgba(26, 26, 26, 0.20)', 
      borderRadius: 12, 
      flexDirection: 'column', 
      justifyContent: 'flex-start', 
      alignItems: 'flex-start', 
      gap: 4, 
      display: 'inline-flex'}}>
        <DDItem label = {'Home'}/>
        <DDItem label = {'Online Order'}/>
        <DDItem label = {'Directions'}/>
        <DDItem label = {'Careers'}/>
        <DDItem label = {'Contact'}/>
    </div>
  );
}

/* Submit button */
function Submit(){
  const [isVisible, setVisible] = useState(false);

  const submitClick = () => {
    setVisible(true);

  }
  return(
    <div style = {{
      paddingTop: 20,
      paddingLeft: 80,
      paddingBottom: 90}}>
      <button style = {{
        width: 100, 
        height: '100%', 
        paddingLeft: 25, 
        paddingRight: 25, 
        paddingTop: 15, 
        paddingBottom: 15, 
        background: '#8F250C', 
        borderRadius: 12, 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 2, 
        display: 'inline-flex'}} onClick = {submitClick}>
        <div style = {{
          background: '#8F250C', 
          color: 'white', 
          fontSize: 17, 
          fontWeight: '550', 
          wordWrap: 'break-word'}}>Submit</div>
          {isVisible && (
            <div style = {{
              position: 'absolute',
              top: 'auto',
              right: 100}}>
              <PopUp />
            </div>
          )}
        </button>
    </div>
  );
}

/* Application section */
function Application(){
  return(
    <div style = {{
      paddingLeft: 40,
      paddingTop: 50
    }}>
      <div style = {{
        width: '90%', 
        height: '100%',
        fontWeight: '700',
        color: '#691E06',
        letterSpacing: -5,
        fontSize: 90,
        fontWeight: 500,
        }}>Apply Now!</div>
      <div style = {{
        width: '90%', 
        height: '100%',
        paddingTop: 20,
        color: '#691E06',
        fontSize: 40
      }}>
        Enter position(s) and attatch your resume and cover letter to apply.
      </div>
      <div style = {{paddingLeft: 30}}>
        <div style = {{paddingBottom: 20}}>
          <PosTextBox />
          <IndButton choice = {'Full-Time'}/>
          <IndButton choice = {'Part-Time'}/>
          <IndButton choice = {'Seasonal'}/>
        </div>
        <DropBox />
      </div>
    </div>
  );
}

/* Position Textbox */
function PosTextBox() {
  var newEdits = '';

  return(
    <div style = {{
      width: '90%', 
      height: '100%', 
      flexDirection: 'column', 
      justifyContent: 'flex-start', 
      alignItems: 'flex-start', 
      gap: 4,
      display: 'inline-flex'}}>
      <div style = {{
        alignSelf: 'stretch', 
        color: '#691E06', 
        fontSize: 22, 
        fontWeight: '450',
        paddingLeft: 5,
        paddingTop: 20,
        wordWrap: 'break-word'}}>Position(s)</div>
      <input style = {{
        alignSelf: 'stretch', 
        height: 35, 
        paddingLeft: 12, 
        paddingRight: 30, 
        paddingTop: 6, 
        paddingBottom: 6, 
        background: '#FDFDFD', 
        borderRadius: 8, 
        fontSize: 20,
        border: '0.66px #CA5310 solid'}}
        contentEditable
        type = 'text'
        onInput = {(e) => {newEdits = e.target.textContent}} />
    </div>
  );
}

/* Dropbox for files */
function DropBox(){
  return(
    <div style = {{
      width: '90%', 
      height: '100%',
      background: '#BB4D00', 
      borderRadius: 8, 
      flexDirection: 'column', 
      justifyContent: 'flex-start', 
      alignItems: 'flex-start', 
      display: 'inline-flex'}}>
      <div style = {{
        alignSelf: 'stretch', 
        height: 150, 
        padding: 32, 
        background: '#BB4D00', 
        borderRadius: 8, 
        border: '0.66px #CA5310 dotted', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        display: 'flex'}}>
        <div style = {{
          paddingLeft: 12, 
          paddingRight: 12, 
          paddingTop: 8, 
          paddingBottom: 8, 
          background: 'white', 
          boxShadow: '0px 1px 0px #E3E3E3 inset', 
          borderRadius: 10, 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: 2, 
          display: 'inline-flex'}}>
          <div style = {{
            color: '#691E06', 
            fontSize: 18, 
            fontWeight: '550',
            background: '#FFF',
            wordWrap: 'break-word'}}>Add files</div>
        </div>
      </div>
    </div>
  );
}

/* Singular button for full/part time */
function IndButton({choice}){
  const [isVisible, setVisible] = useState(false);

  const spotClick = () => {
    setVisible(!isVisible)
  }

  return(
    <div style = {{
      width: '90%', 
      height: '100%', 
      paddingTop: 25,
      paddingLeft: 20,
      justifyContent: 'flex-start', 
      alignItems: 'center', 
      gap: 8, 
      display: 'inline-flex'}}>
      <button style = {{
        width: 20, 
        height: 20, 
        position: 'relative',
        }} onClick = {spotClick}>
        <div style = {{
          width: 16, 
          height: 16, 
          left: 0,
          top: 0, 
          position: 'absolute', 
          background: '#FDFDFD'}} />
      </button>
      <div style = {{
        color: '#691E06', 
        fontSize: 24, 
        fontWeight: '450',
        wordWrap: 'break-word'}}>{choice}</div>
      {isVisible && (
      <button style = {{
        width: 20, 
        height: 20, 
        position: 'absolute',
        }} onClick = {spotClick}>
        <div style = {{
          width: 16, 
          height: 16, 
          left: 0,
          top: 0, 
          position: 'absolute', 
          background: '#CA5310'}} />
      </button>
    )}
    </div>

  );
}

/* Box telling singular position */
function PosBox({posName, posDesc}) {
  return(
    <div style = {{
      width: '90%', 
      height: '100%', 
      flexDirection: 'column', 
      background: '#BB4D00', 
      justifyContent: 'flex-start', 
      alignItems: 'flex-start',
      paddingLeft: 15,
      display: 'inline-flex'}}>
      <div style = {{
        alignSelf: 'stretch', 
        justifyContent: 'flex-start', 
        background: '#BB4D00', 
        alignItems: 'flex-start', 
        display: 'inline-flex'}}>
        <div style = {{
          color: 'white', 
          fontSize: 20, 
          lineHeight: 2.75,
          background: '#BB4D00', 
          fontStyle: 'italic', 
          fontWeight: '500', 
          wordWrap: 'break-word'}}>{posName}</div>
      </div>
      <div style = {{
        alignSelf: 'stretch', 
        color: 'white', 
        fontSize: 20, 
        background: '#BB4D00', 
        fontWeight: '100', 
        wordWrap: 'break-word'}}>{posDesc}</div>
    </div>
  );
}

/* Kitchen Jobs */
function KitchenBox() {
  return(
    <div style = {{
      width: '90%', 
      height: 300, 
      padding: 16, 
      background: '#BB4D00',
      borderRadius: 30, 
      overflow: 'hidden', 
      flexDirection: 'column', 
      justifyContent: 'flex-start', 
      alignItems: 'flex-start', 
      gap: 13,
      display: 'inline-flex'}}>
      <div style = {{
        alignSelf: 'stretch', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        gap: 4, 
        paddingLeft: 15,
        background: '#BB4D00',
        display: 'inline-flex'}}>
        <div style = {{
          color: 'white', 
          paddingTop: 15,
          background: '#BB4D00',
          fontSize: 20,
          fontWeight: '800',
          wordWrap: 'break-word'}}>Kitchen</div>
      </div>
      <PosBox 
        posName = {'Line Cook'} 
        posDesc = {'Full-Time, $20/hr. Prep food and plate dishes for customers.'} 
      />
      <PosBox 
        posName = {'Dish Washer'} 
        posDesc = {'Full-Time/Part-Time/Seasonal, $17/hr. Clean dishes to ensure clean tableware is always available.'} 
      />
      <div style = {{padding: 9, background: '#BB4D00'}}/>
    </div>
  );
}
/* Customer Service Jobs */
function CusServeBox() {
  return(
    <div style = {{
      width: '90%', 
      height: 400, 
      padding: 16, 
      background: '#BB4D00',
      borderRadius: 30, 
      overflow: 'hidden', 
      flexDirection: 'column', 
      justifyContent: 'flex-start', 
      alignItems: 'flex-start', 
      gap: 13,
      display: 'inline-flex'}}>
      <div style = {{
        alignSelf: 'stretch', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        gap: 4, 
        paddingLeft: 15,
        background: '#BB4D00',
        display: 'inline-flex'}}>
        <div style = {{
          color: 'white', 
          paddingTop: 15,
          background: '#BB4D00',
          fontSize: 20,
          fontWeight: '800',
          wordWrap: 'break-word'}}>Customer Service</div>
      </div>
      <PosBox 
        posName = {'Busser'} 
        posDesc = {'Full-Time/Part-Time/Seasonal, $15/hr. Clean, sanitize, and reset tables.'} 
      />
      <PosBox 
        posName = {'Server'} 
        posDesc = {'Full-Time/Part-Time/Seasonal, $13/hr. Take orders and deliver to kitchen.'} 
      />
      <PosBox 
        posName = {'Assistant Manager'} 
        posDesc = {'Full-Time, $50k annual base salary. Schedule shifts, manage tasks distributed to employees, assist customers.'} 
      />
      <div style = {{padding: 9, background: '#BB4D00'}}/>
    </div>
  );
}

/* The position section with the positions */
function PosSection() {
  return(
    <div>
      <div style = {{
        width: '90%', 
        height: '100%',
        fontWeight: '700',
        color: '#691E06',
        letterSpacing: -4,
        fontSize: 85,
        fontWeight: 600,
        padding: 40,
        paddingTop: 70
      }}>Open Positions:</div>
      <ImgBoxes />
    </div>
  );
}

/* Puts image next to the position boxes */
function ImgBoxes() {
  return(
    <div style = {{display: 'flex'}}>
      <div style = {{
        paddingLeft: 60,
        flex: 3,
        marginRight: 50
      }}>
        <KitchenBox />
        <div style = {{
          width: '90%',
          height: 10,
          background: '#FBBA72',
          padding: 10
        }}/>
        <CusServeBox />
      </div>
      <div style = {{flex: 1}}>
        <LeafIMG />
      </div>
    </div>
  );
}

/* Single line in benefits chart */
function OfferBox({benName, benDesc}){
  return(
    <div style = {{
      width: '100%', 
      height: '100%',  
      justifyContent: 'flex-start', 
      alignItems: 'flex-start', 
      letterSpacing: 1,
      fontSize: 25,
      paddingBottom: 35,
      paddingTop: 35,
      display: 'inline-flex'}}>
      <div style = {{
        flex: '1 1 0', 
        height: 20, 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        display: 'flex'}}>
        <div style = {{
          paddingLeft: 10,
          flex: '1 1 0', 
          color: '#8F250C', 
          fontWeight: '650', 
          wordWrap: 'break-word'}}>{benName}:</div>
      </div>
      <div style = {{
        flex: '1 1 0', 
        height: 20, 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        gap: 10, 
        display: 'flex'}}>
        <div style = {{
          flex: '1 1 0', 
          color: '#8F250C', 
          fontWeight: '450', 
          wordWrap: 'break-word'}}>{benDesc}</div>
      </div>
    </div>
  );
}

/* The entire benefit chart */
function AllOfferBox() {
  return(
    <div style = {{
      paddingLeft: 60
    }}>
      <OfferBox benName = {'Benefits'} benDesc = {'Something about benefits'}/>
      <WhiteLine />
      <OfferBox benName = {'Pay'} benDesc = {'Something about pay'}/>
      <WhiteLine />
      <OfferBox benName = {'Employee Discount'} benDesc = {'Something about employee discounts'}/>
      <WhiteLine />
    </div>
  );
}

/* A white line (used in benefit chart) */
function WhiteLine() {
  return(
    <div style={{
      width: '90%',
      display: 'flex',
      height: 2,
      background: '#FFF',
      display: 'inline-flex'
    }}/>
  );
}

/* The box at the top with the restaurant name */
function TopBox(){
  return(
    <div style = {{
      display: 'flex',
      width: '100%',
      height: '70px',
      alignItems: 'center',
      background: '#691E06' }}>
      <DropDown />
      <div style = {{
        width: '270px',
        height: '100%',
        color: '#FFF',
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'Helvetica-Bold',
        lineHeight: 1.75,
        background: '#691E06' }}>Autumn Eats</div>
    </div>
  );
};

/* The header at the top of page 
(first three lines of text before benefits chart */
function TextArea(){
  return(
    <div style = {{
      width: '95%',
      height: '100%',
      color: '#691E06',
      fontFamily: 'Helvetica-Bold',
      fontSize: 110,
      paddingLeft: 50,
      padding: 40,
      letterSpacing: -3.5
    }}>Career Opportunities
      <div style = {{
        width: '95%',
        height: 100,
        color: '#8F250C',
        fontSize: 50,
        wordWrap: 'break-word',
        lineHeight: 1.25,
        paddingTop: 15
      }}>
        (something about how great it is working here)
      </div>
      <div style = {{
        width: '100%',
        color: '#691E06',
        fontSize: 75,
        fontWeight: 600,
        paddingLeft: 10
      }}>
        All Opportunities Offer:
      </div>
    </div>
  );
}

/* The drop down menu in the top box */
function DropDown(){
  const [isVisible, setVisible] = useState(false);

  const buttonClick = () => {
    setVisible(!isVisible)
  }

  return(
    <div>
    <button style={{
      width: '75px', 
      height: '100%', 
      background: '#691E06',
      position: 'relative',
      color: '#FBBA72',
      fontSize: 30}} onClick = {buttonClick}>
        \/
    </button>
    {isVisible && (
      <div style = {{
        position: 'absolute',
        top: 85}}>
        <DDOptions />
      </div>
      
    )}
    </div>
  );
}
