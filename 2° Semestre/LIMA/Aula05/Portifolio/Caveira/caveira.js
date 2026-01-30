function loadskull(){
    skullmaterial = new TRHEE.Shader.Material({
        uniforms:{
            tíne:{
                type: "f",
            },
            color1:{
                value: new TRHEE.Vector3(
                   ...option.color1)
            },
            resolution: {
                value: new TRHEE.Vector2(
                    ...option.color2)
            }
        },
        fragmentShader: fragskull,
        vertexShader: vertSkull
    })
}