var convertLength = (value, from, to) => {
    // this is a reference from which all conversions are made
    // The acceptedUnits.fromSi is the value of the unit in comparism to the Standard International(SI) unit for length
    const acceptedUnits = [
        {
            abbr: 'mm',
            fromSi: 1000
        },
        {
            abbr: 'cm',
            fromSi: 100
        },
        {
            abbr: 'm',
            fromSi: 1
        }
    ];

    // return back value if the unit we are converting from is the same as the unit we are converting to
    if(from === to) {
        console.log('Same Value')
        return value;
    }

    // loop through the acceptedUnits setting the apropriate unit to its fromSi value 
    acceptedUnits.forEach( unit => {
        if( unit.abbr === from ) {
            from = unit.fromSi
        } else if( unit.abbr === to ) {
            to = unit.fromSi
        } else {
            // set them to an error
            from = 'Error';
            to = 'Error';
        }
    });

    if(from === 'Error' || to === 'Error') {
        // throw an error because the provided unit is not valid or not supported
        return new Error('The units provided do not match any supported unit');
    } else {
        const result = value / from * to;

        return result;
    }
}

export default convertLength = convertLength;