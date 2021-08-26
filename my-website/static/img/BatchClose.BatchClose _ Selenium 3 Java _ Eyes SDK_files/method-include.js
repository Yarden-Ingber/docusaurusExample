var overwriteAttributes; /* = [ 
    {name:"data-mc-include-children",val:"True"},
    {name:"data-mc-include-siblings",val:"True"},
    {name:"data-mc-include-parent", val:"False"},
    {name:"data-mc-max-depth", val:"0"}
];
*/
var overwriteAttributesPattern = [
    {   pattern : 'classes-gen/class_[a-z0-9_-]*/method',
        def : [
            {name:"data-mc-include-children",val:"True"},
            {name:"data-mc-include-siblings",val:"True"},
            {name:"data-mc-include-parent", val:"False"},
            {name:"data-mc-max-depth", val:"1"}
        ]
    }
]
