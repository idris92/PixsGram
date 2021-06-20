import React, {useState} from 'react'

import ProgressBar from './progressBar'

const UploadForm = () =>{
    const [file,setFile] = useState(null)
    const [error, setError] = useState(null)

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) =>{
        let selected = e.target.files[0];
        console.log(selected)

        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }else{
            setFile(null);
            setError('Please select an image file (png or jpg)');
        }
    }
    return(
        <form>
            <label>
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>
            <div className="output">
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
                {error && <div className="error">{error}</div>}
            </div>
        </form>
    )
}


export default UploadForm