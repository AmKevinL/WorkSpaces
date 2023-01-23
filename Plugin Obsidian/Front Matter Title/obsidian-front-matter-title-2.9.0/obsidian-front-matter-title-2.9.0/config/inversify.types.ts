const SI = {
    "factory:replacer": "",
    "factory:creator:templates": "",
    "event:dispatcher": "",
    "alias:modifier": "",
    "alias:modifier:strategy": "",
    "alias:modifier:validator": "",
    "cache": "",
    "component:black_white_list": "",
    "component:extractor": "",
    "component:extractor:strategy": "",
    "creator": "",
    "creator:fallback": "",
    "creator:template": "",
    "delimiter": "",
    "facade:obsidian": "",
    "factory:alias:modifier:strategy": "",
    "factory:alias:modifier:validator": "",
    "factory:feature": "",
    "factory:metadata:cache": "",
    "factory:obsidian:active:file": "",
    "factory:obsidian:file": "",
    "factory:obsidian:file_modifiable": "",
    "factory:obsidian:meta": "",
    "factory:placeholder": "",
    "factory:placeholder:resolver": "",
    "factory:template": "",
    "factory:template:resolver": "",
    "newable:obsidian:chooser": "",
    "feature": "",
    "feature:composer": "",
    "filter": "",
    "getter:delimiter": "",
    "listener": "",
    "logger": "",
    "logger:composer": "",
    "manager:composer": "",
    "obsidian:app": "",
    "obsidian:plugin": "",
    "placeholder": "",
    "placeholder:brackets": "",
    "placeholder:meta": "",
    "resolver": "",
    "service:note:link": "",
    "settings:feature:builder": "",
    "settings:builder": "",
    "factory:settings:feature:builder": "",
    "factory:settings:builder": "",
    "settings:storage": "",
    "template:pattern": "",
    "templates": "",
    api: "",
    defer: "",
    "factory:api": "",
    "factory:processor": "",
    "processor": "",
    "processor:args": ""
};

for (const key of Object.keys(SI)) {
    //@ts-ignore
    SI[key] = Symbol.for(key);
}

export default SI;