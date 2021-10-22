# Bot commands
The Weeby API bot uses slash commands which can be run in the bot's DMs and on the server.

<DiscordMessages>
    <DiscordMessage profile="bot">
        <template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
			>apply</DiscordInteraction>
		</template>
        Submit an application for the API. <br>
        Usage: <strong>/apply</strong> &lt;bot ID&gt; &lt;server count&gt; &lt;reason&gt;
    </DiscordMessage>
    <DiscordMessage profile="bot">
        <template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
			>token</DiscordInteraction>
		</template>
        Sends a ephemeral message of your API Token. <br>
        If you want it sent to your DM, set the <code>dm</code> option to true <br>
        Usage: <strong>/token</strong> [dm]
    </DiscordMessage>
    <DiscordMessage profile="bot">
        <template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
			>stats</DiscordInteraction>
		</template>
        View the current statistics of Weeby API. <br>
        Usage: <strong>/stats</strong>
    </DiscordMessage>
    <DiscordMessage profile="bot">
        <template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
			>help</DiscordInteraction>
		</template>
        Get information about a command. <br>
        Usage: <strong>/help</strong> &lt;command&gt;
    </DiscordMessage>
    <DiscordMessage profile="bot">
        <template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
			>ping</DiscordInteraction>
		</template>
        Fetches the current ping of the bot. <br>
        Usage: <strong>/ping</strong>
    </DiscordMessage>
    <DiscordMessage profile="bot">
        <template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
			>docs</DiscordInteraction>
		</template>
        View endpoint documentation of Weeby API directly. <br>
        Usage: <strong>/docs</strong> [category] [type]
    </DiscordMessage>
    <DiscordMessage profile="bot">
        <template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
			>support</DiscordInteraction>
		</template>
        Get information about a support article. <br>
        Usage: <strong>/support</strong> [tag]
    </DiscordMessage>
    <DiscordMessage profile="bot">
        <template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
			>wrapper</DiscordInteraction>
		</template>
        Get information about an API wrapper. <br>
        Usage: <strong>/wrapper</strong> [name]
    </DiscordMessage>
    <DiscordMessage profile="bot">
        <template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
			>about</DiscordInteraction>
		</template>
        Get useful information about Weeby API. <br>
        Usage: <strong>/apply</strong>
    </DiscordMessage>
</DiscordMessages>
