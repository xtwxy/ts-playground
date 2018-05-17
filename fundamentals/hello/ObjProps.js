var obj = { 'key0': 'value0' };

obj['key1'] = 'value1';

for(o in obj) {
    console.log(o + " = " + obj[o]);
}

