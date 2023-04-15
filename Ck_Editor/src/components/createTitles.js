import React, { useState, useEffect, useCallback } from 'react';


function CreatTitles() {
 
  const [createTitleName, setCreateTitleName] = useState('')
  const [titlesArray, setTitlesArray] = useState([])
  const [selectTitleName, setSelectTitleName] = useState('')

  const createDocumentTitles=()=>{

    setCreateTitleName('')
    let obj = {
      id: createTitleName,
      text: "",
      sub: []
    }
    let arr = titlesArray
    arr.push(obj)
    setTitlesArray(arr)
    
  }

  const handleChange=(e)=>{
    setCreateTitleName(e.target.value)
  }

  const selectTitle=(e)=>{
    setSelectTitleName(e.target.value)
  }

  console.log("==titlesArray==", titlesArray);
  return(
        <div className='createTitles m-3'>
                       
          <div className='mt-3 d-block'>
              <p>Enter Title Name : </p>
              <input type="text" 
                  name="createTitleName"
                  value={createTitleName}
                  onChange={(e)=>handleChange(e)} 
                  placeholder=' Title Name ...!'
              />
              <button type="button"
                  disabled={createTitleName.length > 0 ? false : true} 
                  className="btn btn-primary d-block mt-1"
                  onClick={()=>createDocumentTitles()}
              >
                Create Document Title
              </button>

            <div className='selectdropdown mt-1'>
              {titlesArray.length > 0 ? 
                <div>
                  <select value={selectTitleName} onChange={(e)=>selectTitle(e)}>
                    {titlesArray.map((item,index)=>{
                      return(
                          <option value={item.id} key={index}>{item.id}</option>
                      )
                    })}
                  </select> 
                  <input type="text" 
                      name="createTitleName"
                      value={createTitleName}
                      onChange={(e)=>handleChange(e)} 
                      placeholder=' Title Name ...!'
                  />
                  <button type="button" className="btn btn-primary d-block mt-1"
                        onClick={()=>createDocumentTitles()}
                    >
                      Create Document Title
                  </button>
                  </div>
              : "" }
              </div>


          </div> 
        </div>
  )
}

export default CreatTitles;







