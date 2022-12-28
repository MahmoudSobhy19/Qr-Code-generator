import React, { useState } from 'react';
import Input from './Input';
import { Button } from './Button';
import QRCode from "react-qr-code";

const QrCode = () => {
  const [url, setUrl] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  const handelChange = (e: any) => {
    setUrl(e.target.value);
  };

  const handelSubmit = (e: any) => {
    e.preventDefault();
    setShow(true);
  };

  const handelReset = (e: any) => {
    e.preventDefault();
    setUrl("");
    setShow(false);
  };

  return ( 
    <div className='min-h-screen min-w-full flex flex-col gap-10 justify-center items-center'>

      {show? (
        <div className='flex flex-col gap-10 justify-center items-center bg-slate-200 px-20 py-6 rounded'>
          <QRCode value={url} />
          <Button
            onClick={handelReset}
          >
            Reset
          </Button>
        </div>
      ) : (
        <form 
          onSubmit={handelSubmit}
          className='flex flex-col gap-6 justify-center items-center bg-slate-200 px-10 py-6 rounded md:flex-row'
        >
          <p className='text-xl font-bold '>Generate QR Code</p>

          <Input 
            type="text"
            value={url}
            onChange={handelChange} 
            className=' w-60 md:w-96'
          />

          <Button
            type="submit"
            disabled={!url}
          >
            Generate
          </Button>
        </form>
      )}

      <p className=' absolute bottom-8'>Desgined and Developed by Mahmoud Sobhy 🖤</p>
    </div>
  );
}
 
export default QrCode;