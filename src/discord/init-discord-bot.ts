import { REST, Routes, Client, GatewayIntentBits } from 'discord.js';
import { env } from '@/env';
import { CommandNames } from './constants';

export const initDiscordBot = async () => {
  await (async function initCommands() {
    const commands = [
      {
        name: CommandNames.Ping,
        description: '回應 pong!',
      },
      {
        name: CommandNames.UpdateData,
        description: '更新地震資料，若有新資料則發送通知',
      },
    ];

    const rest = new REST({ version: '10' }).setToken(env.DISCORD_TOKEN);

    try {
      console.log('開始載入應用程式指令...');

      await rest.put(Routes.applicationCommands(env.DISCORD_CLIENT_ID), {
        body: commands,
      });

      console.log('成功載入應用程式指令!');
    } catch (error) {
      console.error(error);
    }
  })();

  await (async function initClient() {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });

    client.on('ready', () => {
      if (client.isReady()) {
        console.log(`${client.user.tag} 成功登入!`);
      }
    });

    client.on('interactionCreate', async (interaction) => {
      if (!interaction.isChatInputCommand()) return;

      switch (interaction.commandName) {
        case CommandNames.Ping: {
          await interaction.reply('pong!');
          break;
        }
        case CommandNames.UpdateData: {
          await interaction.reply('此功能開發中...');
          break;
        }
        default: {
          console.log(`查無指令: ${interaction.commandName}!`);
        }
      }
    });

    client.login(env.DISCORD_TOKEN);
  })();
};
