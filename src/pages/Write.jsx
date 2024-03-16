import React, { useContext, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/userContext'


const modules = {
    toolbar: [
      [{'header': [1,2,3,4,5,6, false]}],
      ['bold','italic','underline','strike','blockquote'],
      [{'list':'ordered'},{'list':'bullet'},{'indent':'-1'},{'indent':'+1'}],
      ['link','image'],
      ['clean']
    ],
  }
  
  const formats = [
    'header','bold','italic','underline','strike','blockquote','list','bullet','indent','link','image'
  ]
const Write = () => {

 
  
  return (
    <div className='write_post'>
      <div className="container">
        <h2>Create Post</h2>
        <form className="create_input-form">
          <input type="text" placeholder='Title'  />
          
          <ReactQuill modules={modules} formats={formats} className='quill'  />
            <input type="file"  accept='png, jpg, jpeg' />
            <button type='submit' className='btn primary'>Create</button>
        </form>
      </div>
    </div>
  )
}

export default Write