var array = new Array("hello", "world");

console.log('array elements:');
for(o in array) {
    console.log(o + " = " + array[o]);
}

array['key1'] = 'value1';
array['key2'] = 'value2';

console.log('after adding properties:');
for(o in array) {
    console.log(o + " = " + array[o]);
}

