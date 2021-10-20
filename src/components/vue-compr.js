const fs = require('fs')
const path = require('path')
const dir = path.resolve(__dirname)
const ComponentName = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const tpstring = "``"
const template = (name) => {

    return `<template lang="pug">
    div.${name} Component named  ${name}
</template>

<script>
export default {
    name: '${name}',
    data: () => ({

    })
}
</script>

<style lang="stylus" scoped>
@import '../../stylus/ia_variables'
@import './${name}.styl'
@import './${name}-mobile.styl'
@import './${name}-tablet.styl'
@import './${name}-laptop.styl'
</style>
`
}

crear_Componente(template)


function crear_Componente (t) {


    ComponentName.question('Nombre del componente: ', function(name){
    createFile(name)
    ComponentName.close()
})

 function createFile(filename) {
// Crar el directorio
    fs.mkdirSync(filename);
// Estructura del componente

const structure = {
    archivo_main: [`${filename}.vue`,  t(filename)],
    archivo_stylus: [`${filename}.styl`, `// Styles for ${filename}`],
    archivo_mobile: [`${filename}-mobile.styl`, `// ${filename} mobile styles` ],
    archivo_tablet:[`${filename}-tablet.styl`,`// ${filename} tablet styles`],
    archivo_laptop:[`${filename}-laptop.styl`,` // ${filename} laptop styles`]
}



    const keys = Object.keys(structure)



    keys.map((key, index, ob) => {

        // itera los indices
        // itera el objeto console.log(ob)
        // key console.log(key)
        // valor
        const file = path.resolve(dir, filename ,structure[key][0])
        const content = structure[key][1]
        //
        fs.appendFile(file, content, function(err){
            if(err) throw err
            if (index === keys.length-1){
               console.log(`Se ha creado el componente ${filename} satisfactoriamente`)
            }

        })
    })


/*

    let file_content = {
        header: `import ${filename} from ./${filename}`
    }



    fs.appendFile(`${filename}.js`, `${file_content.header}`, function (err) {
        if (err) throw err
        console.log(`Se ha creado el componente ${filename}`)
    })


    if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

*/


 } // ends createfile


}

