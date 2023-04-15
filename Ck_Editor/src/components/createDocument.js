import React, { useState, useEffect, useCallback } from 'react';
import Editor from "./Editor"


function CreateDocument() {
 
  const [unitChildState, setUnitChildState] = useState(
    [
        {
          id: "WARNINGS AND PRECAUTIONS",
          text: "<h3><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;SECTION-1</strong></h3><h3><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;WARNINGS AND PRECAUTIONS</strong></h3>",
          sub: [
            {
              id: "GENERAL SAFETY PRECAUTIONS",
              text: `<h4>&nbsp;&nbsp;&nbsp;&nbsp;1.1&nbsp;&nbsp;&nbsp;&nbsp;GENERAL SAFETY PRECAUTIONS</h4><p><br>&nbsp;&nbsp;&nbsp;&nbsp;1.1.1&nbsp;&nbsp;&nbsp;&nbsp;Always check the main gun tube before it is fired. If the gun is fired when it is plugged, it could bulge, making it unserviceable or it could burst and cause injury or death.</p><p><br>&nbsp;&nbsp;&nbsp;&nbsp;1.1.2&nbsp;&nbsp;&nbsp;&nbsp;The following precautions must be followed to avoid firing the gun when the tube is plugged:<br>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(i)&nbsp;&nbsp;&nbsp;&nbsp; Use muzzle cover when main gun is not in use.<br>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(ii)&nbsp;&nbsp;&nbsp;&nbsp;When necessary, elevate main gun to prevent it from striking the ground.<br>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(iii)&nbsp;&nbsp;&nbsp;&nbsp;Check the gun tube if you suspect it has been plugged and clean it when necessary.<br>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;(iv)&nbsp;&nbsp;&nbsp;&nbsp;Always carry out a visual inspection of the gun barrel before loading ammunition for firing.<br>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(v)&nbsp;&nbsp;&nbsp;&nbsp;Check firing circuits before firing the main gun.<br>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>`,
              sub: [
                
              ]
            },
            {
              id: "SUMMARY OF WARNINGS",
              text: "<h4>&nbsp;&nbsp;&nbsp;&nbsp;1.2&nbsp;&nbsp;&nbsp;&nbsp;SUMMARY OF WARNINGS</h4><p><br>&nbsp;&nbsp;&nbsp;&nbsp;(i)&nbsp;&nbsp;&nbsp;&nbsp;Always keep the main engine on when firing the main gun. Make sure the areas around the turret, main gun and breech are &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;clear before moving the turret or gun.<br>&nbsp;&nbsp;&nbsp;&nbsp;(ii)&nbsp;&nbsp;&nbsp;&nbsp;Do not strike the primer when passing or stowing 120 mm ammunition.<br>&nbsp;&nbsp;&nbsp;&nbsp;(iii)&nbsp;&nbsp;&nbsp;&nbsp;Do not hammer or strike 120 mm projectile during removal of stuck round.<br>&nbsp;&nbsp;&nbsp;&nbsp;(iv)&nbsp;&nbsp;&nbsp;&nbsp;All outside personnel must remain at least 50 m away from the tank and to its rear when the main or secondary armament is &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;being fired.<br>&nbsp;&nbsp;&nbsp;&nbsp;(v)&nbsp;&nbsp;&nbsp;&nbsp;Keep hands away from the breech of the main gun.<br>&nbsp;&nbsp;&nbsp;&nbsp;(vi)&nbsp;&nbsp;&nbsp;&nbsp;Make sure the weapons are cleared before installing, loading, checking or removing them.<br>&nbsp;&nbsp;&nbsp;&nbsp;(vii)&nbsp;&nbsp;&nbsp;&nbsp;Turret blower must operate when firing the coaxial or main gun.<br>&nbsp;</p>",
              sub: [
                
              ]
            }
          ]
        },
        {
          id: "TANK SPECIFICATIONS",
          text: "TANK SPECIFICATIONS",
          sub: [
            {
              id: "GENERAL DATA",
              text: "GENERAL DATA",
              sub: [
                {
                  id: "MAIN ARMAMENT",
                  text: "MAIN ARMAMENT",
                  sub: [
                    
                  ]
                },
                {
                  id: "AMMUNITION",
                  text: "AMMUNITION",
                  sub: [
                    
                  ]
                }
              ]
            }
          ]
        },{
          id: "MAIN ARMAMENT",
          text: "MAIN ARMAMENT",
          sub: [
            {
              id: "120 mm MAIN GUN",
              text: "120 mm MAIN GUN",
              sub: [
                {
                  id: "GENERAL",
                  text: "GENERAL",
                  sub: [
                    
                  ]
                },
                {
                  id: "AIM/PURPOSE",
                  text: "AIM/PURPOSE",
                  sub: [
                    
                  ]
                },
                {
                  id: "LOCATION AND ASSEMBLY OF 120 mm ORDNANCE",
                  text: "LOCATION AND ASSEMBLY OF 120 mm ORDNANCE",
                  sub: [
                    
                  ]
                },
                {
                  id: "DESCRIPTION OF PARTS/COMPONENTS",
                  text: "DESCRIPTION OF PARTS/COMPONENTS",
                  sub: [
                    {
                      id: "Barrel",
                      text: "Barrel",
                      sub: [
                        
                      ]
                    },
                    {
                      id: "Breech Mechanism",
                      text: "Breech Mechanism",
                      sub: [
                        
                      ]
                    },
                    {
                      id: "Fume Extractor",
                      text: "Fume Extractor",
                      sub: [
                        
                      ]
                    },
                    {
                      id: "Thermal Insulating Jacket (TIJ)",
                      text: "Thermal Insulating Jacket (TIJ)",
                      sub: [
                        
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ])
    // [{   editorShow:false,
    //     unitTitle: "1 unit"
    // }])
  const [activeUnit, setActiveUnit] = useState('')
  const [editorWindowTexts, setEditorWindowTexts] = useState([])
  const [activeWindowText, setActiveWindowText] = useState('')


  useEffect(()=>{
    setActiveUnit(unitChildState[0].text)
  },[])
 
  const handleChange = (e, indexTile) => {
    unitChildState.map((item, index)=>{
      if(indexTile === item) item.unitTitle = e.target.value
    })
        // console.log(unitChildState[index],"--gfdg------", unitChildState[index]['unitTitle'])
        // unitChildState[index]['unitTitle'] = e.target.value
        setUnitChildState(unitChildState)
  };

  
  const clickChild= ()=>{
    
    let keyVal = unitChildState.length //unitChildState.length > 0 ? Object.keys(unitChildState[unitChildState.length-1]) : 0
    let obj = {
      editorShow:false,
      unitTitle: `${Number(keyVal)+1} unit`
    }
    
    setUnitChildState(preValue=>([...preValue, obj]))
  }
 


  const passText = (unit, text)=>{
    let obj = {}
    obj[unit] = unit

    setEditorWindowTexts([...editorWindowTexts, obj])
    setActiveUnit(text)
   
  }

  const Childs=({data, dataIndex})=>{

    return(
        <>
        { 
            data && data.map((item, index)=>{
                let  style={
                    "paddingLeft" : "15px"
                }
                let subIndex = `${dataIndex}.${index+1}`
               return(
                <>
               <div key={index} style={style}
                onClick={()=>passText(index+1,item.text )}>  
                   {dataIndex}.{ index+1 }. <UnitChild text={item.id} />
                </div>
                {item.sub ? 
                    <div style={style} >
                        <Childs data={item.sub} dataIndex={subIndex}/>
                    </div> 
                : ""}

                </>
               )
             })
           } 
        </>
    )
}


     return (
      <>
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-3 ml-1">
              <div className='editor'>
                {/* <input type="text" /> */}
                {/* <button onClick={()=>clickChild()}>Add New Unit</button>  */}
                { 
                 unitChildState && unitChildState.map((item, index)=>{
                  
                    return(
                        <div className="p-1">
                            <div key={index} 
                                onClick={()=>passText(index+1,item.text )}>  
                                { index+1 }. <UnitChild text={item.id} />
                            
                            </div>
                            {item.sub ? <Childs data={item.sub} dataIndex={index+1}/> : ""}
                        </div>
                    )
                  })
                } 
              </div> 
           
            </div>
            <div className="col-sm-9 mr-3">
                <Editor unit={activeUnit} data={editorWindowTexts} />
            </div>
          </div>
          <div className='saveBtn'>
            <button type="button" className="btn btn-primary">SAVE CONTENT</button>
          </div>
        </div>
      </>
    )
}

export default CreateDocument;

function UnitChild(props){
 
    return(
      <>
        {props.text}
      </>
    )
}







