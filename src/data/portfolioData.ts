import { ProjectItem, VideoShowcase, Milestone, RigTool } from '../types';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'streetrush',
    num: '01',
    title: 'StreetRush Asia',
    category: 'game',
    categoryLabel: 'FIVEM PLATFORM',
    techTags: ['Lua 5.4', 'C# .NET', 'Vue 3 NUI', 'PostgreSQL', 'Redis State'],
    badge: '128 TICK',
    badgeType: 'tertiary',
    shortDesc: 'High-frequency competitive multiplayer racing server on FiveM featuring proprietary real-time telemetry pipelines, microsecond checkpoint reconciliation, and dynamic spatial leaderboard projection.',
    fullDesc: 'Grand Theft Auto V synchronization defaults to 30 ticks per second, causing vehicle ghosting during 200+ MPH street races. We engineered a proprietary event loop that bypasses the native replication layer, running physics sampling at 128 Hz with client-side interpolation and dead-reckoning extrapolation.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmLVNbto15h_MaPorL80xdKyIEPdhMVORu9ZTkV5zA6y_73nUsWaA7CFcX0z4V7URdmABzH1pzyuulGObPDB6-Sw6cEQkVpuawZCkgfhr-CbpCVgzB1qtq9lZ8pXKzI7OD5LYqZQoLZxA5-k_5l26TPSYlhLk8qHOISymjFoEKtu7birbdf0pUDoUrY-33BFso52Xee9LPe01WmwFEst_kf5Cmjq0geV2MuMuWwWOdq72HXLtyvzmjUw',
    imageAlt: 'StreetRush Asia dark high-contrast night street racing HUD view for FiveM game server with glowing purple trajectory lines and neon green tachometer telemetry',
    stats: {
      label1: 'TICK CYCLE',
      val1: '128 TICK (7.8ms)',
      label2: 'SYNC LATENCY',
      val2: '< 1.2ms',
      label3: 'CONCURRENCY',
      val3: '250+ RACERS',
    },
    metrics: {
      left: 'LATENCY DELTA: 1.2ms',
      right: 'CONCURRENT RACERS: 64',
    },
    codeTitle: 'CORE TELEMETRY BROADCAST',
    codeLang: 'LUA 5.4 JIT',
    codeSnippet: `-- 128-tick Telemetry Sample Loop
RegisterNetEvent("sr:sync:telemetry", function(payload)
  local clientStamp = payload.ts
  local serverStamp = GetGameTimer()
  local drift = math.abs(serverStamp - clientStamp)
  
  if drift < 45 then
    ReconcilePosition(payload.entity, payload.coords, payload.velocity)
  else
    RollbackToConfirmedTick(payload.entity, clientStamp)
  end
end)`,
    nodes: ['Client NUI (Vue 3)', 'IPC Gateway Hub', '128Hz Tick Engine', 'Redis State Cache'],
    repo: 'https://github.com/kingplayz1/streetrush-telemetry',
    version: 'v2.4.12-rc'
  },
  {
    id: 'arena',
    num: '02',
    title: '3SL Arena Matchmaker',
    category: 'game',
    categoryLabel: 'PVP ENGINE',
    techTags: ['Lua JIT', 'Node.js Coordinator', 'WebSockets', 'SQLite Cache'],
    badge: 'ZERO DRIFT',
    badgeType: 'secondary',
    shortDesc: 'Dedicated competitive PvP arena engine with deterministic matchmaking queue, server-side anti-recoil verification, state-rewind hit registration, and instant killcam buffer storage.',
    fullDesc: 'Competitive shooters require absolute server authority. We implemented an in-memory 500ms sliding buffer that stores every player position vector. On weapon discharge, the server rewinds time to the exact millisecond of trigger pull on the shooter\'s screen, validating line-of-sight against server collision boundaries.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaUQIpaeU46E-xxeP9E61Ubyy9ubMOCXqH7k4XU47dS2Gt4VdJJIcBYUsJKa3h58LJCyKpgQ_XA6-tmabWb2QyfGK0iuWlqW1wMlmuKA47jHaVl_k6q258-gkTLk_nkf0jbZuunRsO1Mxjy4o_-F8WtL2mfLxOlJdlyVToLzkDbfpPwNaYj_ePkJCpGFdJmjlcmvgMCPf1_hkneJApWzqUyh09v0jqRPURbmCG1g1wstGlSK0ZD-lD9A',
    imageAlt: '3SL Arena dark tactical combat simulation screen for FiveM GTA V multiplayer with spatial trajectory vectors',
    stats: {
      label1: 'ROUND RESYNC',
      val1: '30ms',
      label2: 'DESYNC MITIGATION',
      val2: '99.4%',
      label3: 'MATCH RATE',
      val3: '1,200/wk',
    },
    metrics: {
      left: 'DESYNC MITIGATION: 99.4%',
      right: 'ROUND RESYNC: 30ms',
    },
    codeTitle: 'LAG COMPENSATION REWIND',
    codeLang: 'TYPESCRIPT',
    codeSnippet: `// Lag Compensation Rewind Verification
export function verifyHitRegistration(shooterId, targetId, fireTimestamp, hitCoords) {
  const snapshot = worldHistoryBuffer.getClosestTick(fireTimestamp);
  const targetHistoricBounding = snapshot.getHitbox(targetId);
  
  const isValidHit = targetHistoricBounding.intersectsRay(hitCoords);
  if (isValidHit) {
    applyDamage(targetId, snapshot.weaponDamage);
  }
  return { valid: isValidHit, latencyOffset: Date.now() - fireTimestamp };
}`,
    nodes: ['Raycast Client', 'WebSocket Edge', 'Rewind Engine', 'SQLite Ramdisk'],
    repo: 'https://github.com/kingplayz1',
    version: 'arena.core.sys'
  },
  {
    id: 'diora',
    num: '03',
    title: 'Diora Luxe 3D E-Commerce',
    category: 'web',
    categoryLabel: 'WEBGL & INTERACTIVE',
    techTags: ['Three.js', 'React Three Fiber', 'GLSL Shaders', 'Tailwind CSS', 'GSAP'],
    badge: '60 FPS LOCKED',
    badgeType: 'tertiary',
    shortDesc: 'High-end cinematic luxury goods web experience incorporating real-time WebGL materials, PBR diamond refraction, dynamic studio lighting presets, and frictionless cart state synchronization.',
    fullDesc: 'Luxury items demand tactile, luminous physical interaction. We authored custom GLSL shaders with chromatic dispersion and simulated caustic reflections on metallic surfaces while optimizing mesh draw calls to sustain smooth 60 FPS on mobile devices.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvmfxXClEJ4H_obpKyUmmjDYvZAmChw5CxciPbBSWWCETa6AwZIPkKRRxgJSecsgPLUHOli68jlb-626iO3sJIRqLu3kpp6iQobc_Z_-_K3l9x7Y_d2-tzdXkKxXxoRKZp0HnsFQJGRarqMgCvosRYxtbMGohWjPv4QZ-ibvmTdY_cCbvFevYBN0vIbqOPVTFKpq7VcaPrhqDu00XDkGNEvlrO2XlY0cLKIYuNiErTI_ji4RfPj_hlhw',
    imageAlt: 'Diora Luxe 3D product showcase for luxury jewelry watch with glass prism raytracing in dark obsidian environment',
    stats: {
      label1: 'DRAW CALLS',
      val1: '24 OPTIMIZED',
      label2: 'PAYLOAD',
      val2: '< 2.8 MB',
      label3: 'LIGHTHOUSE',
      val3: '100% PERF',
    },
    metrics: {
      left: 'DRAW CALLS: 24 OPTIMIZED',
      right: 'ASSET PAYLOAD: < 2.8 MB',
    },
    codeTitle: 'DIAMOND REFRACTION FRAGMENT SHADER',
    codeLang: 'GLSL SHADER',
    codeSnippet: `// WebGL Fragment Shader Excerpt - Diamond Refraction
uniform samplerCube envMap;
uniform float ior;
varying vec3 vNormal;
varying vec3 vWorldPosition;

void main() {
  vec3 viewDir = normalize(vWorldPosition - cameraPosition);
  vec3 refracted = refract(viewDir, normalize(vNormal), 1.0 / ior);
  vec4 texColor = textureCube(envMap, refracted);
  gl_FragColor = vec4(texColor.rgb * vec3(1.15, 1.1, 1.25), 1.0);
}`,
    nodes: ['Three.js Canvas', 'GLSL Shader', 'Draco Mesh', 'Edge CDN Store'],
    repo: 'https://github.com/kingplayz1',
    version: 'diora.studio'
  },
  {
    id: 'darkbeat',
    num: '04',
    title: 'DarkBeat & MusicGirl',
    category: 'backend',
    categoryLabel: 'AUDIO PIPELINE',
    techTags: ['Node.js', 'Discord.js v14', 'Lavalink v4', 'Redis Caching', 'Docker'],
    badge: '200+ GUILDS',
    badgeType: 'secondary',
    shortDesc: 'High-concurrency audio bots serving 200+ verified Discord servers with custom cluster sharding, distributed Lavalink instances, auto-fallback nodes, and sub-10ms packet dispatching.',
    fullDesc: 'Handling streaming audio for hundreds of concurrent voice channels requires immediate failover. When an individual Lavalink node experiences network jitter or CPU saturation, audio sessions transfer state to a nearby node within 300 milliseconds without interrupting the audio playback stream.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIKFIFVri8Gs-1dfdi5eU7haGo6eyr682CrF4zaWUy311V5WfzkyJoCMb_ToqwIHUHn0Vn1O38wHNTjJcdDAkEYkECQpNiFrdxWZw-th1978qDujlNZTAfMNTjNrVmVKSqDoGUBckLmi3-q2knyNimcNrL_2tRWmjHu8qtnIM79QNT5fvNvg3fhJRPtuCSR5mSNqYzIAc84HQkpJTT344BtztsU1o9gqzAVug75nicI9rWWNpFj7gTRQ',
    imageAlt: 'Dark high-tech server telemetry cluster visual for real-time Discord bot infrastructure with glowing blue audio waveforms',
    stats: {
      label1: 'CODEC',
      val1: 'OPUS 48KHZ',
      label2: 'NODE LOAD',
      val2: '28% AVERAGE',
      label3: 'DAU USERS',
      val3: '200K+ DAU',
    },
    metrics: {
      left: 'AUDIO CODEC: OPUS 48KHZ',
      right: 'NODE LOAD: 28%',
    },
    codeTitle: 'DYNAMIC NODE FAILOVER LISTENER',
    codeLang: 'NODE.JS CLUSTER',
    codeSnippet: `// Dynamic Lavalink Node Health Switcher
nodePool.on('nodeError', async (node, error) => {
  logger.warn(\`Node \${node.name} failed! Shifting active guilds...\`);
  const healthyNode = nodePool.getLowestPingNode();
  const guildPlayers = playerManager.getByNode(node.name);

  for (const player of guildPlayers) {
    await player.migrateNode(healthyNode);
    player.resumeStream();
  }
});`,
    nodes: ['Discord Voice Gateway', 'Lavalink Cluster', 'Node LoadBalancer', 'Redis Session Cache'],
    repo: 'https://github.com/kingplayz1/lavalink-audio-streamer',
    version: 'cluster-prod-04'
  },
  {
    id: 'dgstatus',
    num: '05',
    title: 'DG Status Page Engine',
    category: 'web',
    categoryLabel: 'TELEMETRY & SRE',
    techTags: ['Next.js 14', 'Edge Runtime', 'Tailwind CSS', 'Serverless Cron'],
    badge: 'REALTIME CRON',
    badgeType: 'tertiary',
    shortDesc: 'Multi-region synthetic edge monitor tracking game nodes, web APIs, and audio daemon health. Includes dynamic incident automation, webhook escalation, and public zero-config dashboards.',
    fullDesc: 'Server telemetry dashboard that queries game server ports, REST endpoints, and WebSocket heartbeats from 4 geographic edges every 60 seconds, outputting consolidated SLA metrics and dispatching automated incident notifications to webhooks.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzck_p0L3EULKraWIz708CpQlxUvT7jL2C2o9IDwZZZganN0zf9m7P-iXeg5R35_PfeCrhyevnDdS7Ny8W_33vvhhZjM5xSHDdMyAyzYkJ2MmvKpoqgeoJ0rzwPdV6CwFrhL2ERsSuJMBJoEAP6WKuFhcA4S7Abwny4ZmZBhfXPI1UZSAFmCg_5IolPJ1TZ02hTHvfZVcfGpMwnRzoIEAIi13RrrKKIuPN38lRYVXUCXk4F0_UxKxWrA',
    imageAlt: 'Mission control global monitoring dashboard showing telemetry server diagnostics with green status indicators',
    stats: {
      label1: 'INTERVAL',
      val1: '60s PROBES',
      label2: 'UPTIME SLA',
      val2: '100% HEALTH',
      label3: 'DATA CHANNELS',
      val3: '18 ACTIVE',
    },
    metrics: {
      left: 'SYNTHETIC PROBES: 60s INTERVAL',
      right: 'DATA CHANNELS: 18',
    },
    codeTitle: 'SYNTHETIC HEALTH PROBE',
    codeLang: 'EDGE RUNTIME',
    codeSnippet: `// Multi-Region Synthetic Probe Runner
export async function runSyntheticEdgeCheck(targetEndpoint) {
  const start = performance.now();
  try {
    const res = await fetch(targetEndpoint, { method: 'HEAD', timeout: 3000 });
    const latency = Math.round(performance.now() - start);
    return { status: res.status < 400 ? 'OPERATIONAL' : 'DEGRADED', latency };
  } catch (err) {
    return { status: 'OUTAGE', latency: -1 };
  }
}`,
    nodes: ['Probe Worker', 'Edge Cron Scheduler', 'Consensus Hub', 'Webhook Dispatcher'],
    repo: 'https://github.com/kingplayz1/edge-status-probe',
    version: 'status.dg.network'
  },
  {
    id: 'assistantx',
    num: '06',
    title: 'AssistantX Development Engine',
    category: 'backend',
    categoryLabel: 'AI DEVTOOLS',
    techTags: ['Rust CLI', 'TypeScript', 'Tree-sitter', 'IPC Sockets'],
    badge: 'LOCAL FIRST',
    badgeType: 'primary',
    shortDesc: 'Lightweight local context generator and code scaffolding pipeline designed for terminal power users. Scans project ASTs, injects dependency graph schemas, and speeds up feature prototyping.',
    fullDesc: 'Context-aware developer CLI that traverses repository abstract syntax trees (ASTs), parses function exports, and assembles structured micro-prompts for local LLM consumption with negligible overhead.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtTvqKrRgX5TW3MkFfKLFYUgWuVKL9g9rw6KlB5C2lDaXfGf55oeZsXUnwMwjUdiOnK6mxx4e4zSxjE13Re2h6du3_rUOHbF1XboP95uXsq45M3WJjzLBwfICLq3QjVJp1w7HOcYsMbOm8lcrdhORuj3qmVSeJNimcs5UFK69qY8NHw2BKLRV5HMX6NCb1rI-lp7jEEa__hXAgMfE3Q5IQOsdbcE52aHeBqK59pTsCz6cik2PfPI4LEA',
    imageAlt: 'Futuristic command-line AST code tokenizer interface visualization with abstract lexical tree nodes in violet and cyan',
    stats: {
      label1: 'PARSER SPEED',
      val1: '350K TOKENS/S',
      label2: 'MEMORY RSS',
      val2: '45MB FOOTPRINT',
      label3: 'EXECUTION',
      val3: '0.04s CLI',
    },
    metrics: {
      left: 'CONTEXT PARSER: 350K TOKENS/S',
      right: 'MEMORY FOOTPRINT: 45MB',
    },
    codeTitle: 'ABSTRACT SYNTAX TREE VISITOR',
    codeLang: 'RUST CLI',
    codeSnippet: `// AssistantX CLI Context Builder
pub fn analyze_directory(path: &Path) -> Result<ProjectGraph, EngineError> {
    let mut ast_tree = ProjectGraph::new();
    for entry in WalkDir::new(path).into_iter().filter_map(|e| e.ok()) {
        if entry.path().extension().map_or(false, |ext| ext == "lua" || ext == "ts") {
            ast_tree.ingest_source(entry.path())?;
        }
    }
    Ok(ast_tree)
}`,
    nodes: ['CLI Parser (Rust)', 'Tree-sitter AST', 'Prompt Synthesizer', 'Local IPC Sockets'],
    repo: 'https://github.com/kingplayz1',
    version: 'crates.io/assistantx'
  }
];

export const VIDEOS_DATA: VideoShowcase[] = [
  {
    id: 'fivem-racing',
    title: 'The Ultimate FiveM Racing Showcase',
    category: 'fivem',
    categoryLabel: 'GTA V / FIVEM CINEMATICS',
    tag1: '4K DCI',
    tag2: 'SPEED RAMP',
    duration: '14:28',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABn0P8nRjuv-bFZXakrxLOp4NOyFNGC6c1NtLoCrcp-9j6ntdb_BZeydJs5b-io6AEDV5jcHYOafehOiyg4ykDeQwgew29UjMG9eDKnx3SV_WnkY60VBP-OYczjyqecIGsJI6CMsZAzv0KkE3T1aZ62dTkh4-Alcw3yEMIGKqoNwindfctUM_B_BmvfNIKZZQpF4tXgBuoNHyHtXREUZHxJnd7-zjdMO-mJyfnBKpsMSo6e8UhXcxwjw',
    imageAlt: 'High adrenaline FiveM GTA custom midnight street racing scene with high performance Japanese tuned cars sliding through industrial docks',
    software: 'PREMIERE + DAVINCI RESOLVE',
    description: 'Multi-camera cinematic drone tracking, kinetic sound design, custom optical speed ramping, and high-frequency engine audio syncing.',
    impressions: '3.4M Impressions',
    specs: {
      res: '3840 x 2160 (4K DCI)',
      fps: '60.00 Locked',
      render: 'ProRes 422 HQ',
      color: 'ACEScg / DCI-P3 Tone Mapped',
      workflow: 'Utilized custom server-side tickrate recording at 128 ticks, imported into Blender for simulated drone lens distortion, final conform and grading in DaVinci Resolve.',
      stack: ['Adobe Premiere Pro', 'DaVinci Resolve Studio', 'FiveM Cam Studio', 'Boris FX Sapphire']
    }
  },
  {
    id: 'val-rhythm',
    title: 'Valorant Precision Rhythmic Edit',
    category: 'valorant',
    categoryLabel: 'VALORANT MOTION EDITS',
    tag1: '120 FPS RETIME',
    tag2: '3D CAMERA SWEEP',
    duration: '08:42',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVRuh3UfRgj-7YXlN_u3r_iJ6HHLok1ko9GMBSACxnb4oStktl1f7S3nSZMaoOH8Vk_Dxq6TksG5KgVZQGZcdizAEo9gqoyDXczaF_AlQINlsb-a22TJNDvaK1MEldV7A0ZyHHN3FwGwsBn8Jy5mKXHr5v3Arr1r33x4ySf2cTImSyvyycJlZNmuRdOM-bppcLt-g_8tuMzx9DfhkZUiKCrMXL8XhH5dKJaT-cj5hTPqBqqMgwEfJMNg',
    imageAlt: 'High tech stylized Valorant esports motion edit with radiant neon purple and electric cyan graphic sweeps',
    software: 'AFTER EFFECTS + BLENDER',
    description: 'Sync beat drops keyed to sniper bullet firing pins, custom 3D typography sweeps through game coordinate space, and optical flow retiming.',
    impressions: 'Featured on Creator Hub',
    specs: {
      res: '2560 x 1440 (QHD)',
      fps: '120.00 FPS Retimed',
      render: 'H.265 Master 80Mbps',
      color: 'Rec.709 High Contrast Cyber',
      workflow: 'Custom frame extraction from 240Hz raw shadowplay footage. Motion vectors parsed in After Effects with Boris FX Sapphire chromatic aberrations and optical flow retiming.',
      stack: ['Adobe After Effects', 'Blender 3D', 'Boris FX Sapphire', 'Adobe Audition']
    }
  },
  {
    id: 'dev-stream',
    title: 'Low Latency Game Systems Breakdown',
    category: 'dev',
    categoryLabel: 'DEV STREAM BREAKDOWNS',
    tag1: 'TECH TALK',
    tag2: 'DIAGRAM ANIMATION',
    duration: '19:15',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU4Nsoviml68B-MLP6bmChQ9gD9NNZ0OsKyeW3RyoxEk5WTsNJ1AXdC11QN-utd4IeJBiIIdYraFJSB3mFMYM7nefx8dI6qyQyWOQMOJeg9wQcsdVnv39hb35_ygaf1Fihl-7r-DPtwjnkbhCwcG1fL3zk6nRSWiGWdR9-pgFmJtQrW7gzohjDYzDc6ByxBb5AUTm1J7fG88B7MtnhlGpEs2lj1x2skr1KmGXa8Rossligj5GSErqLkA',
    imageAlt: 'Developer motion graphics visualization showing low-latency real-time server architecture with glowing violet data packets',
    software: 'MOTION INFOGRAPHICS',
    description: 'Educational developer stream and motion-design technical walkthrough illustrating netcode tickrates, WebSockets, and spatial indexing.',
    impressions: 'Dev Stream Premiere · 11.4K Views',
    specs: {
      res: '1920 x 1080 (FHD)',
      fps: '60.00 FPS',
      render: 'ProRes 422',
      color: 'sRGB Clean Minimal Grade',
      workflow: 'Vector diagrams drafted in Figma, converted into SVG paths, and animated with kinetic keyframes in After Effects before sequence compilation.',
      stack: ['Adobe Premiere Pro', 'Adobe After Effects', 'Figma SVG Exporter', 'Audacity']
    }
  },
  {
    id: 'audio-reactive',
    title: 'Audio-Reactive Motion Experiment',
    category: 'mograph',
    categoryLabel: 'MOTION GRAPHICS EXPERIMENTS',
    tag1: 'EXPERIMENTAL',
    tag2: 'GLITCH RHYTHM',
    duration: '04:12',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6RVNFwdGrcFTsI8OTy0FZxSrIqeanjxMg1c1-u3F8RxZENIFBdf5P7ewNSHGjtbgObYfeUydcK_k0Prtjo1gMNmCRKfAo3q7Y8sHR9hKN4buwn1ybrWsmbZW6uHtrQMh0isT1bRLfwbkn9H0yH9vCB72ZaMjM5s0dPhsfKmOm4BgcqrOxNIYF_sSgcKvJekOTCq3cUdM3LdaVXh5E5qZ4wM7E_7skYyAbL8iyu2i1J1nJkQUxA1_L8w',
    imageAlt: 'Experimental abstract motion graphics with kinetic heavy bold typography tearing through 3D space with reactive glitch particles',
    software: 'TOUCHDESIGNER + AFTER EFFECTS',
    description: 'Kinetic text synced to underground electronic breakbeats, procedural distort displacement maps, and sub-frame typography keyframing.',
    impressions: 'Kinetic Type Lab Award',
    specs: {
      res: '3840 x 2160 (4K UHD)',
      fps: '60.00 FPS Locked',
      render: 'Uncompressed Master',
      color: 'ACEScc Extended Dynamic',
      workflow: 'Audio stems separated into 4 distinct frequency bands in TouchDesigner, fed to displacement shaders, finalized with custom kinetic kerning scripts in After Effects.',
      stack: ['TouchDesigner', 'Adobe After Effects', 'Ableton Live 11', 'Cinema 4D']
    }
  }
];

export const MILESTONES_DATA: Milestone[] = [
  {
    id: 'genesis',
    era: '2018 — 2020',
    title: 'Deconstruction & First Scripts',
    badge: 'GENESIS',
    shortDesc: 'Tinkering with raw game configs, breaking physics parameters, and authoring foundational JavaScript & Lua scripts. Realizing code was simply another creative palette.',
    status: 'ARCHIVED MILESTONE • SEED PHASE',
    breakthrough: 'Re-engineered raw game physics configs and discovered event listeners in early JS & Lua runtimes. Transformed game mechanics into interactive sandboxes.',
    techTags: ['Lua 5.1', 'Vanilla JavaScript', 'Local Sockets', 'Game Engine Modding'],
    lesson: 'Understanding how a system works under the hood makes writing new abstractions intuitive and friction-free.'
  },
  {
    id: 'kingplayz',
    era: '2020 — 2022',
    title: 'Motion Design & @KINGPLAYZ008',
    badge: 'KINGPLAYZ ERA',
    shortDesc: 'Building a YouTube audience through relentless video production. Mastering non-linear editing, motion graphics, audio sync, and viewer retention dynamics in Premiere and After Effects.',
    status: 'HIGH AUDIENCE RETENTION ERA',
    breakthrough: 'Engineered non-linear pacing workflows on YouTube, producing 100K+ view videos by synchronizing keyframe acceleration with sub-bass audio transients.',
    techTags: ['Adobe Premiere Pro', 'After Effects', 'Optical Flow', 'Parametric EQ Mastering'],
    lesson: 'Viewer retention is rhythm. If a cut does not move the narrative or heighten tension, it gets pruned.'
  },
  {
    id: 'fivem',
    era: '2022 — 2024',
    title: 'FiveM Multiplayer & Socket Infra',
    badge: 'NETWORKING',
    shortDesc: 'Deep architectural immersion into FiveM state replication, socket-based data buses, distributed inventories, and latency reduction in real-time gaming environments.',
    status: 'PRODUCTION CONCURRENCY PROVEN',
    breakthrough: 'Constructed custom socket buses handling delta updates across 200+ concurrent players without memory leaks or stutter under peak server strain.',
    techTags: ['FiveM Core', 'LuaJIT', 'Node.js Workers', 'Redis Pub/Sub', 'WebSocket'],
    lesson: 'In multiplayer engineering, optimistic client reconciliation and defensive state sync prevent 99% of player desync.'
  },
  {
    id: 'streetrush',
    era: '2024 — PRESENT',
    title: 'StreetRush Asia & Scale Systems',
    badge: 'ACTIVE FRONTIER',
    shortDesc: 'Engineering high-scale digital platforms including StreetRush Asia, robust real-time Discord audio backbones, and bespoke creative toolkits blending code with production visuals.',
    status: 'PRODUCTION GRADE • ACTIVE RUNTIME',
    breakthrough: 'Engineered ultra-low-jitter synchronization for 200+ simultaneous players without desync, while producing high-tempo promotional trailers with custom sound design.',
    techTags: ['LuaJIT Engine', 'Redis Packet Queues', 'TypeScript Web', 'Resolve & AE', 'Docker'],
    lesson: 'Code architecture without user empathy is sterile; video without structural tension is forgettable. Bridging both creates memorable impact.'
  }
];

export const RIG_TOOLS: RigTool[] = [
  // Dev
  {
    name: 'VS Code (Neovim keys)',
    tier: 'TIER-01 DEV',
    desc: 'Custom modular keybindings, Lua Language Server, strict ESLint with zero latency cursor response.',
    spec: '0-latency Neovim modal',
    status: 'DAILY PRODUCTION',
    icon: 'laptop_mac',
    category: 'dev'
  },
  {
    name: 'Git & GitHub CLI',
    tier: 'TIER-01 DEV',
    desc: 'Trunk-based development flow, atomic signed commits, automated GitHub actions CI/CD.',
    spec: 'gh cli + hub extensions',
    status: 'VCS PRODUCTION',
    icon: 'terminal',
    category: 'dev'
  },
  {
    name: 'Docker Containers',
    tier: 'TIER-01 DEV',
    desc: 'Isolated sandbox environments mirroring production FiveM game nodes and Redis mirrors.',
    spec: 'Multi-stage rootless daemon',
    status: 'CONTAINERIZED',
    icon: 'deployed_code',
    category: 'dev'
  },
  {
    name: 'Cloudflare & Node.js',
    tier: 'TIER-01 DEV',
    desc: 'Global low-latency DNS, Workers at 275+ edge locations, SSL termination, and WebSocket routing.',
    spec: 'Sub-15ms edge compute',
    status: 'CDN & EDGE',
    icon: 'cloud',
    category: 'dev'
  },
  {
    name: 'Redis & LuaJIT',
    tier: 'TIER-01 DEV',
    desc: 'Ultra-fast in-memory state persistence for high-frequency player coordinates and game inventory.',
    spec: 'Pub/Sub < 1ms dispatch',
    status: 'IN-MEMORY ENGINE',
    icon: 'database',
    category: 'dev'
  },
  // Creative
  {
    name: 'Premiere Pro',
    tier: 'TIER-02 CREATIVE',
    desc: 'Multi-camera sequencing, hardware Mercury Playback, ProRes 422 workflow, and rhythmic timeline cuts.',
    spec: 'ProRes 422 Proxy / 4K native',
    status: 'TIMELINE MASTER',
    icon: 'movie',
    category: 'creative'
  },
  {
    name: 'After Effects',
    tier: 'TIER-02 CREATIVE',
    desc: 'Kinetic typography, custom bezier motion curves, tracking, and particle simulation rigs.',
    spec: 'Multi-frame rendering enabled',
    status: 'VFX MOTION RIG',
    icon: 'auto_fix_high',
    category: 'creative'
  },
  {
    name: 'DaVinci Resolve Studio',
    tier: 'TIER-02 CREATIVE',
    desc: 'ACES color science pipeline, node-based grading, film grain emulation, and rec.709/HDR mastering.',
    spec: '32-bit floating point color',
    status: 'STUDIO COLOR GRADE',
    icon: 'palette',
    category: 'creative'
  },
  {
    name: 'Blender 3D',
    tier: 'TIER-02 CREATIVE',
    desc: 'Cycles GPU rendering, procedural shaders, camera projection, and visual asset modeling.',
    spec: 'OptiX GPU acceleration',
    status: '3D COMPOSITING',
    icon: 'view_in_ar',
    category: 'creative'
  },
  {
    name: 'Audition & VST Suite',
    tier: 'TIER-02 CREATIVE',
    desc: 'FabFilter surgical dynamic EQ, iZotope mastering, sub-bass enhancement, and binaural audio mixes.',
    spec: '32-bit float 96kHz master',
    status: 'SPATIAL AUDIO RIG',
    icon: 'graphic_eq',
    category: 'creative'
  },
  // Hardware
  {
    name: 'Dual High-Refresh Displays',
    tier: 'HARDWARE',
    desc: '165Hz IPS ultra-low response screens calibrated for pixel-perfect motion testing and split terminal feeds.',
    spec: '165Hz IPS Calibrated',
    status: 'DISPLAY ENGINE',
    icon: 'desktop_windows',
    category: 'hardware'
  },
  {
    name: 'Custom Mechanical Board',
    tier: 'HARDWARE',
    desc: 'Lubed Gateron linear switches, dampening foam, QMK firmware mapped for instant code macro triggers.',
    spec: 'Custom tuned 55g actuation',
    status: 'TACTILE INPUT',
    icon: 'keyboard',
    category: 'hardware'
  },
  {
    name: 'Studio Monitor Headphones',
    tier: 'HARDWARE',
    desc: 'Acoustically flat frequency curve for precise audio mastering, low-end rumble detection, and clean vocal cuts.',
    spec: 'Flat 15Hz - 28kHz response',
    status: 'AUDIO MONITORING',
    icon: 'headphones',
    category: 'hardware'
  },
  {
    name: 'Multi-core Compute Rig',
    tier: 'HARDWARE',
    desc: '32GB High-speed Dual Channel DDR4/DDR5, Gen4 NVMe scratch drives reading at 7,000MB/s.',
    spec: '32GB RAM / 7000MB/s NVMe',
    status: 'COMPUTE CORE',
    icon: 'memory',
    category: 'hardware'
  },
  {
    name: 'Dedicated GPU Acceleration',
    tier: 'HARDWARE',
    desc: 'NVIDIA RTX Architecture with CUDA acceleration for After Effects 3D raytracing and Blender Cycles.',
    spec: 'NVIDIA Tensor + RT Cores',
    status: 'GRAPHICS PIPELINE',
    icon: 'developer_board',
    category: 'hardware'
  }
];

export const TECH_STACK_ITEMS = [
  { title: 'JavaScript', meta: 'ESNext · 140k+ LOC · Reactive Runtime', cat: 'code' },
  { title: 'TypeScript', meta: 'Strict Types · Zero-Any policy · Interfaces', cat: 'code' },
  { title: 'Node.js', meta: 'Async I/O · Cluster Workers · Microservices', cat: 'backend' },
  { title: 'Lua', meta: 'FiveM Native · Coroutine Loops · Fast Bytecode', cat: 'code' },
  { title: 'FiveM', meta: 'Custom Net Events · Entity Sync · NUI CEF', cat: 'game' },
  { title: 'Git / VCS', meta: 'CI/CD Workflows · Automated Releases · PR Reviews', cat: 'dev' },
  { title: 'MySQL', meta: 'Indexed Queries · Pool Optimization · 3.2ms Query', cat: 'backend' },
  { title: 'Cloudflare', meta: 'Edge Workers · CDN Cache · DNS Routing', cat: 'dev' },
  { title: 'REST APIs', meta: 'OpenAPI Specs · Strict Auth · Rate-Limiting', cat: 'backend' },
  { title: 'Discord APIs', meta: 'Gateway WebSockets · Voice Buffers · Opus Codec', cat: 'backend' },
  { title: 'UI / UX', meta: 'Design Tokens · Micro-Interactions · Fluid Layouts', cat: 'web' },
  { title: 'Editing', meta: 'DaVinci Resolve & Premiere · Pacing · 4K 60FPS', cat: 'creative' },
  { title: 'Motion FX', meta: 'After Effects · Kinetic Typography · Speed Ramps', cat: 'creative' },
  { title: 'WebSockets', meta: 'Bidirectional Sub-10ms Streaming · Binary Payloads', cat: 'backend' }
];
