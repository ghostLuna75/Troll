exports = {
name: "exec",
aliases: "npm",
code: `
$exec[npm i $message]
$deleteCommand
$onlyForIDs[$botOwnerID;896846485805744168;$joinSplitText[;];]
$textSplit[$getGlobalUserVar[dev;$clientid];/]
$onlyif[$charCount[$message]>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [package]\`**}}]`}