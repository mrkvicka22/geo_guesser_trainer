import React, {useState} from 'react'
import { Image, Input, requiredChakraThemeKeys } from '@chakra-ui/react'
import { Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/stat'
import images from "C:/Users/mrkva/Documents/geoguessr/bollards/BE"
console.log(images)


export default function Guesser({type}) {
    const [imageSrc, setImageSrc] = useState();

    return (
      <div>
        <Image
          src={}
        />
        <Input placeholder="Country" size="lg" />
      </div>
    );
}
