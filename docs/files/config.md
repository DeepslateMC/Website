# Configuration File
The `deepslate.yml` file is location in the `deepslate` folder, right where the `messages.yml` sits.
<br>
In it you can enable or disable the following features and control their behaviour.

## discordLink
`discordLink: https://discord.gg/BGrhNnVczp`

Sets the link used by the /dc and /discord command

## opCommandActive
`opCommandActive: true`

Sets wether the /op command should get initialized or not, which can be usefull for security reasons

## spawnOnJoin
`spawnOnJoin: false`

Sets if players should get teleported to spawn when joining the server

Remember so set a spawn when setting this to true

## preventKnowledgebookClick
`preventKnowledgebookClick: false`

Decides if knowledgebook clicks should get cancelled

## coloredSigns
### enabled
`enabled: false`

Toggles the colored signs feature

### usePermission
`usePermission: true`

If set to true, only players with the colored signs permission will be able to use the function

## autoSmelt
### price
`price: 30`

The price in XP levels the autosmelt enchantment costs a player

### enabledWorlds
`enabledWorlds:`

  `- FantasyWorld`

A list of worlds, where the autosmelt feature works

## messages
`messages:`

  `movedWrongly: true`

  `movedQuickly: true`

Decides whether some messages should be enabled or not

## debug menu name
`f3name: '&eDeepslateMC'`

Sets the brand name displayed in the F3 menu

## tablist
### enabled
`enabled: false`

Turns the tablist decoration on or off

### header
`header:`

  `- '&4This is the'`

  `- '&4default header'`

The text displayed above the player list

### footer
`footer:`

  `- '&6This is the'`

  `- '&6default footer'`

The text displayed below the player list

## playerlistHover
### enabled
`enabled: false`

Turns the custom playerlist hover text on or off

### lines
`lines:`

  `- '&4This is the'`

  `- '&4default text'`

The lines displayed when hovering over the player count

## bossbar
### enabled
`enabled: false`

Turns the bossbar on or off

### color
`color: WHITE`

Controls the color of the bossbar. Valid options are: `PINK`, `BLUE`, `RED`, `GREEN`, `YELLOW`, `PURPLE`,  `WHITE`

### progress
`progress: 1.0`

Controls the how far the bossbar is filled. This is a value between 0 and 1

### style
`style: PROGRESS`

Controls the segmentation style of the bossbar. Valid options are: `PROGRESS`, `NOTCHED_6`, `NOTCHED_10`, `NOTCHED_12`, `NOTCHED_20`. The first option is a smooth bossbar without any segments while the others options have as many segments as the name implies

### text
`text: '&6Custom Bossbar'`

Sets the text displayed above the bossbar

## actionbar
### enabled
`enabled: false`

Turns the actionbar on or off

### text
`text: '&6Custom Actionbar'`

Sets the text displayed above the inventory

## miniMessageMotdSupport
`miniMessageMotdSupport: true`

Sets wether the MOTD from the `server.properties` file should be interpreted as MiniMessage string. With MiniMessage you can create things like gradients easier. Make sure to use the [Editor](https://webui.advntr.dev/) to create your MOTD.
The new default is `true` and the option to disable this will be removed in a future release

## miniMessageMessages
`miniMessageMessages: false`

If this is `false`, all messages will be interpreted using legacy color codes with the `&` symbol.

If this is `true`, all messages in the `messages.yml` will be interpreted using the MiniMessage format. With MiniMessage you can create things like gradients easier. Make sure to use the [Editor](https://webui.advntr.dev/) to create your messages.

## sendSpectatorModePackets
`sendSpectatorModePackets: true`

If this is `false`, packets containing the gamemode change to the spectator mode will not be send to other players. Because of this, the spectator player will not appear differently in the tablist. The player in spectator mode will still see himself modified in the tablist. If this is set to `true`, vanilla behaviour will be used.

## serverLinks
`serverLinks:`

`  <gold>Website: 'https://pascalpex.de'`

You can add key value pairs of names and URLs here. Those links will be shown to players in their game pause menu. The name of the link supports Minimessage.

## enableTablist
`enableTablist: true`

If set to false, this hides all players from the tablist, including yourself
