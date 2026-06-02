# Features ✨

Here you can find a short introduction to all the unique features and mechanics **DeepslateMC** introduces to your server.

## 🎨 Visuals & Branding

Customize the look and feel of your server to make it truly yours.

<CardGrid>

<FeatureCard icon="🌈" title="MiniMessage MOTD">

Define your `MOTD` in the `server.properties` file using the MiniMessage format for beautiful gradients:

```xml
<rainbow>Hello, this is my MOTD</rainbow>
<gradient:blue:red><b>This is a bold gradient</b></gradient>
```

<img src="/img/mini_motd.png" alt="MiniMessage MOTD">
</FeatureCard>

<FeatureCard title="Debug Menu Brand" icon="🖥️">
You can customize the server brand shown to players in the top left of their debug menu (<code>F3</code>).
<img src="/img/debug_brand.png" alt="Debug Menu Brand">
</FeatureCard>

<FeatureCard title="Tablist Decoration" icon="📋">
Decorate the tablist by adding your own custom <code>header</code> and <code>footer</code>, or completely disable the player tablist entirely.
<img src="/img/empty_tablist.png" alt="Empty Tablist">
</FeatureCard>

<FeatureCard title="Playerlist Hover" icon="🖱️">
Add a custom text that will be shown to users when hovering over the player count in their multiplayer server list.
<img src="/img/playerlist_hover.png" alt="Playerlist Hover">
</FeatureCard>

<FeatureCard title="Custom Bossbar" icon="⚔️">
Add a persistent, custom bossbar that will be displayed to all your players.
<img src="/img/bossbar.png" alt="Bossbar">
</FeatureCard>

<FeatureCard title="Actionbar Message" icon="💬">
Display a continuous, custom actionbar message directly above your players' inventories.
<img src="/img/actionbar.png" alt="Actionbar">
</FeatureCard>

<FeatureCard title="Server Links Menu" icon="🔗">
Easily add custom links to the new <code>Server Links...</code> section in the game's pause menu (ESC) introduced in Minecraft 1.21.
</FeatureCard>

</CardGrid>

---

## 🎮 Commands & Utilities

Helpful commands for your players and administrators.

<CardGrid>

<FeatureCard title="Discord Link" icon="📱">
Use <code>/dc</code> or <code>/discord</code> to easily provide players with the link to your community Discord server.
</FeatureCard>

<FeatureCard title="ClearChat" icon="🧹">
Use <code>/cc</code> or <code>/clearchat</code> to instantly wipe the chat history of your Minecraft server.
</FeatureCard>

<FeatureCard title="Buildworld" icon="🏗️">
The commands <code>/setbuildworld</code> and <code>/buildworld</code> make a dedicated world easily accessible for your builders.
</FeatureCard>

<FeatureCard title="Spawn System" icon="🌍">
The commands <code>/spawn</code> and <code>/setspawn</code> are added to set up a central lobby or spawn point for your players.
</FeatureCard>

<FeatureCard title="Custom Help" icon="❓">
You can freely change the output of the <code>/help</code> command to provide tailored guidance for your players.
</FeatureCard>

<FeatureCard title="Unbreakable Items" icon="💎">
The command <code>/unbreakable</code> allows you to make the item currently in your hand completely indestructible.
</FeatureCard>

</CardGrid>

---

## ⚙️ Tweaks & Security

Mechanics to keep your server safe and clean.

<CardGrid>

<FeatureCard title="Maintenance Mode" icon="🚧">
Toggleable with <code>/maintenance</code>, this mode will only allow authorized players to join your server while you are working on it.
</FeatureCard>

<FeatureCard title="Disable /op" icon="🛡️">
You are able to completely deactivate the vanilla <code>/op</code> command for security reasons, as it is no longer required when using a proper permissions plugin.
</FeatureCard>

<FeatureCard title="Spectator Visibility" icon="👻">
Optionally disable the transparent style of spectators in the tablist to make them appear as normal players instead of this:
<img src="/img/spectator.png" alt="Spectator Mode Player">
</FeatureCard>

<FeatureCard title="Knowledge Book Clicks" icon="📖">
Disable the clicking of the <code>Knowledge Book</code> item so it no longer disappears.
</FeatureCard>

<FeatureCard title="Move Error Messages" icon="🔇">
Silence annoying console warnings like <code>Steve moved too quickly!</code> triggered by Minecraft's built-in movement checks.
</FeatureCard>

</CardGrid>

---

## 🌳 Upstream Features & Customization

::: info 🧬 The Power of a Fork
Because **DeepslateMC** is a custom fork of [Leaf](https://github.com/Winds-Studio/Leaf), it inherently includes all the incredible performance patches, gameplay mechanics, and API additions of its upstream predecessors:

* **Paper:** The industry standard for stability and performance.
* **Purpur:** Highly customizable vanilla gameplay features.
* **Leaf:** Advanced optimizations and technical improvements.

You don't lose any vanilla or upstream functionality – you only gain the exclusive DeepslateMC features on top!
:::

::: tip 📝 Complete Translation Support
Almost everything in DeepslateMC is translatable! You can fully customize, recolor, and translate all messages used in various parts of the server software by simply editing the [Messages File](/docs/files/messages).
:::