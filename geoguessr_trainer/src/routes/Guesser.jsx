import React, {useState} from 'react'
import { Image, Input, requiredChakraThemeKeys } from '@chakra-ui/react'
import { Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/stat'
import { useEffect } from 'react'
import getRandomImage from '../api/getRandomImage'
import getImage from '../api/getImage'


export default function Guesser({type}) {
    const [imageSrc, setImageSrc] = useState();
    const [country, setCountry] = useState();
    const [image, setImage] = useState();
    
    useEffect(()=>getRandomImage(setImageSrc, setCountry), []);
    useEffect(()=>getImage(imageSrc, setImage),[imageSrc])
    
    return (
      <div>
        {imageSrc && country && image && (
          <div>
            <h1>{country}</h1>
            <Image src={`data:image/png;base64,${image}`} />
            <Input placeholder="Country" size="lg" />
          </div>
        )}
      </div>
    );
}
