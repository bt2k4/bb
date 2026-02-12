// Level configurations
export const levelConfigs = [
    // ------------------------------
    // World 1 (Levels 1-6): Basics & First Verticality
    // ------------------------------
    // Level 1: Single standard bubble to learn the basics.
    {
        bubbles: [
            { x: 400, y: 160, size: 4, type: 'standard' }
        ]
    },
    // Level 2: Two standard bubbles with simple spacing.
    {
        bubbles: [
            { x: 260, y: 160, size: 3, type: 'standard' },
            { x: 540, y: 160, size: 3, type: 'standard' }
        ]
    },
    // Level 3: Add a faster small bubble to mix pacing.
    {
        bubbles: [
            { x: 400, y: 150, size: 4, type: 'standard' },
            { x: 520, y: 220, size: 2, type: 'fast' }
        ]
    },
    // Level 4: Three standard bubbles to widen coverage.
    {
        bubbles: [
            { x: 220, y: 160, size: 3, type: 'standard' },
            { x: 400, y: 160, size: 3, type: 'standard' },
            { x: 580, y: 160, size: 3, type: 'standard' }
        ]
    },
    // Level 5: Heavy center bubble with two smaller companions.
    {
        bubbles: [
            { x: 400, y: 150, size: 4, type: 'heavy' },
            { x: 260, y: 230, size: 2, type: 'standard' },
            { x: 540, y: 230, size: 2, type: 'standard' }
        ]
    },
    // Level 6: First laddered layout with two floors.
    {
        bubbles: [
            { x: 260, y: 170, size: 2, type: 'drifter' },
            { x: 540, y: 170, size: 2, type: 'ghost' },
            { x: 300, y: 520, size: 2, type: 'drifter' },
            { x: 580, y: 520, size: 2, type: 'heavy' }
        ],
        platforms: [
            { x: 0, y: 360, width: 800, height: 22 }
        ],
        ladders: [
            { x: 80, y: 360, width: 28, height: 340 }
        ],
        ceilingSpikes: false
    },
    // ------------------------------
    // World 2 (Levels 7-12): Motion Styles
    // ------------------------------
    // Level 7: Fast middle bubble forces active repositioning.
    {
        bubbles: [
            { x: 200, y: 150, size: 3, type: 'standard' },
            { x: 400, y: 150, size: 3, type: 'fast' },
            { x: 600, y: 150, size: 3, type: 'standard' }
        ]
    },
    // Level 8: First zigzag bubbles to teach directional flips.
    {
        bubbles: [
            { x: 400, y: 150, size: 4, type: 'standard' },
            { x: 260, y: 230, size: 2, type: 'zigzag' },
            { x: 540, y: 230, size: 2, type: 'zigzag' }
        ]
    },
    // Level 9: Rubber bubbles introduce bouncy timing.
    {
        bubbles: [
            { x: 220, y: 150, size: 3, type: 'rubber' },
            { x: 400, y: 150, size: 3, type: 'standard' },
            { x: 580, y: 150, size: 3, type: 'rubber' }
        ]
    },
    // Level 10: First wall gate with mixed bubble speeds.
    {
        bubbles: [
            { x: 360, y: 140, size: 4, type: 'heavy' },
            { x: 200, y: 210, size: 3, type: 'fast' },
            { x: 600, y: 210, size: 3, type: 'standard' },
            { x: 320, y: 250, size: 2, type: 'drifter' }
        ],
        walls: [
            {
                x: 520,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 0, xMax: 520 }
            }
        ]
    },
    // Level 11: Row of fast small bubbles for quick reactions.
    {
        bubbles: [
            { x: 160, y: 150, size: 2, type: 'fast' },
            { x: 320, y: 150, size: 2, type: 'fast' },
            { x: 480, y: 150, size: 2, type: 'fast' },
            { x: 640, y: 150, size: 2, type: 'standard' }
        ]
    },
    // Level 12: Laddered zigzag trio with a lower floor.
    {
        bubbles: [
            { x: 200, y: 170, size: 2, type: 'drifter' },
            { x: 400, y: 170, size: 2, type: 'ghost' },
            { x: 600, y: 170, size: 2, type: 'drifter' },
            { x: 280, y: 510, size: 2, type: 'heavy' },
            { x: 520, y: 510, size: 2, type: 'drifter' }
        ],
        platforms: [
            { x: 0, y: 350, width: 800, height: 22 }
        ],
        ladders: [
            { x: 700, y: 350, width: 28, height: 350 }
        ],
        ceilingSpikes: false
    },
    // ------------------------------
    // World 3 (Levels 13-18): Visibility & Deception
    // ------------------------------
    // Level 13: Ghost bubbles add semi-opaque target tracking.
    {
        bubbles: [
            { x: 220, y: 150, size: 3, type: 'ghost' },
            { x: 440, y: 150, size: 3, type: 'fast' },
            { x: 660, y: 150, size: 3, type: 'ghost' }
        ]
    },
    // Level 14: Ghost + drifter pacing to teach delayed threat reads.
    {
        bubbles: [
            { x: 220, y: 150, size: 3, type: 'ghost' },
            { x: 440, y: 160, size: 3, type: 'drifter' },
            { x: 660, y: 150, size: 3, type: 'ghost' },
            { x: 400, y: 230, size: 2, type: 'rubber' }
        ]
    },
    // Level 15: Phase-shift debut with simple escorts.
    {
        bubbles: [
            { x: 280, y: 150, size: 3, type: 'phaseShift' },
            { x: 540, y: 150, size: 3, type: 'standard' },
            { x: 400, y: 230, size: 2, type: 'fast' }
        ]
    },
    // Level 16: Phase-shift and ghost split lanes through a gate.
    {
        bubbles: [
            { x: 220, y: 150, size: 3, type: 'phaseShift' },
            { x: 520, y: 150, size: 3, type: 'ghost' },
            { x: 360, y: 230, size: 2, type: 'drifter' },
            { x: 600, y: 230, size: 2, type: 'fast' }
        ],
        walls: [
            {
                x: 420,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 0, xMax: 420 }
            }
        ]
    },
    // Level 17: Rhythm debut layered with deceptive movement.
    {
        bubbles: [
            { x: 220, y: 150, size: 3, type: 'rhythm' },
            { x: 440, y: 150, size: 3, type: 'ghost' },
            { x: 660, y: 150, size: 3, type: 'phaseShift' },
            { x: 400, y: 230, size: 2, type: 'fast' }
        ]
    },
    // Level 18: World exam with deception trio and route gate.
    {
        bubbles: [
            { x: 220, y: 150, size: 3, type: 'phaseShift' },
            { x: 440, y: 150, size: 3, type: 'rhythm' },
            { x: 660, y: 150, size: 3, type: 'ghost' },
            { x: 320, y: 230, size: 2, type: 'fast' },
            { x: 560, y: 230, size: 2, type: 'zigzag' }
        ],
        walls: [
            {
                x: 360,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 360, xMax: 800 }
            }
        ]
    },

    // ------------------------------
    // World 4 (Levels 19-24): Gates & Routing
    // ------------------------------
    // Level 19: Simple left-clear gate with heavy anchor.
    {
        bubbles: [
            { x: 260, y: 150, size: 4, type: 'heavy' },
            { x: 520, y: 180, size: 2, type: 'fast' },
            { x: 320, y: 220, size: 2, type: 'drifter' },
            { x: 620, y: 220, size: 2, type: 'zigzag' }
        ],
        walls: [
            {
                x: 520,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 0, xMax: 520 }
            }
        ]
    },
    // Level 20: Armored debut in a right-clear route.
    {
        bubbles: [
            { x: 220, y: 150, size: 4, type: 'armored' },
            { x: 520, y: 170, size: 3, type: 'fast' },
            { x: 340, y: 230, size: 2, type: 'fast' },
            { x: 620, y: 230, size: 2, type: 'zigzag' }
        ],
        walls: [
            {
                x: 300,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 300, xMax: 800 }
            }
        ]
    },
    // Level 21: Dual-lane gate puzzle with rhythm control.
    {
        bubbles: [
            { x: 220, y: 150, size: 3, type: 'rhythm' },
            { x: 580, y: 150, size: 3, type: 'fast' },
            { x: 400, y: 220, size: 2, type: 'phaseShift' }
        ],
        walls: [
            {
                x: 440,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 0, xMax: 440 }
            }
        ]
    },
    // Level 22: Tiny swarm route-check with armored core.
    {
        bubbles: [
            { x: 140, y: 150, size: 1, type: 'fast' },
            { x: 220, y: 150, size: 1, type: 'zigzag' },
            { x: 300, y: 150, size: 1, type: 'fast' },
            { x: 380, y: 150, size: 1, type: 'zigzag' },
            { x: 460, y: 150, size: 1, type: 'fast' },
            { x: 540, y: 150, size: 1, type: 'rhythm' },
            { x: 620, y: 150, size: 1, type: 'fast' },
            { x: 700, y: 150, size: 1, type: 'zigzag' },
            { x: 400, y: 220, size: 2, type: 'armored' }
        ],
        walls: [
            {
                x: 400,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 0, xMax: 400 }
            }
        ]
    },
    // Level 23: Three-floor route planning under split threats.
    {
        bubbles: [
            { x: 200, y: 150, size: 2, type: 'ghost' },
            { x: 520, y: 150, size: 2, type: 'drifter' },
            { x: 360, y: 300, size: 2, type: 'heavy' },
            { x: 600, y: 300, size: 2, type: 'drifter' },
            { x: 260, y: 520, size: 2, type: 'heavy' },
            { x: 540, y: 520, size: 2, type: 'drifter' }
        ],
        platforms: [
            { x: 0, y: 260, width: 800, height: 22 },
            { x: 0, y: 460, width: 800, height: 22 }
        ],
        ladders: [
            { x: 70, y: 460, width: 28, height: 240 },
            { x: 700, y: 260, width: 28, height: 200 }
        ],
        ceilingSpikes: false
    },
    // Level 24: World finale with armored + phase route lock.
    {
        bubbles: [
            { x: 240, y: 150, size: 3, type: 'armored' },
            { x: 560, y: 150, size: 3, type: 'phaseShift' },
            { x: 360, y: 220, size: 2, type: 'zigzag' },
            { x: 440, y: 240, size: 2, type: 'drifter' }
        ],
        walls: [
            {
                x: 520,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 0, xMax: 520 }
            }
        ]
    },

    // ------------------------------
    // World 5 (Levels 25-30): Tempo Pressure
    // ------------------------------
    // Level 25: Closing-wall intro with readable threat spread.
    {
        bubbles: [
            { x: 180, y: 150, size: 3, type: 'fast' },
            { x: 400, y: 150, size: 3, type: 'rhythm' },
            { x: 620, y: 150, size: 3, type: 'ghost' },
            { x: 260, y: 230, size: 2, type: 'zigzag' }
        ],
        closingWall: true
    },
    // Level 26: Heavy core with split lanes and gate pressure.
    {
        bubbles: [
            { x: 340, y: 140, size: 4, type: 'heavy' },
            { x: 180, y: 200, size: 3, type: 'fast' },
            { x: 520, y: 200, size: 3, type: 'fast' },
            { x: 280, y: 250, size: 2, type: 'zigzag' },
            { x: 600, y: 250, size: 2, type: 'rubber' }
        ],
        walls: [
            {
                x: 400,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 0, xMax: 400 }
            }
        ]
    },
    // Level 27: Fast micro-threat field for tempo control.
    {
        bubbles: [
            { x: 160, y: 150, size: 2, type: 'fast' },
            { x: 320, y: 150, size: 2, type: 'rhythm' },
            { x: 480, y: 150, size: 2, type: 'phaseShift' },
            { x: 640, y: 150, size: 2, type: 'fast' },
            { x: 240, y: 230, size: 1, type: 'fast' },
            { x: 560, y: 230, size: 1, type: 'fast' }
        ]
    },
    // Level 28: Closing wall + dual boss bubbles.
    {
        bubbles: [
            { x: 260, y: 150, size: 4, type: 'heavy' },
            { x: 540, y: 150, size: 4, type: 'armored' },
            { x: 360, y: 220, size: 2, type: 'zigzag' }
        ],
        closingWall: true
    },
    // Level 29: Route break under deception mix.
    {
        bubbles: [
            { x: 220, y: 150, size: 3, type: 'phaseShift' },
            { x: 440, y: 150, size: 3, type: 'ghost' },
            { x: 660, y: 150, size: 3, type: 'rhythm' },
            { x: 320, y: 230, size: 2, type: 'fast' },
            { x: 560, y: 230, size: 2, type: 'fast' }
        ],
        walls: [
            {
                x: 300,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 300, xMax: 800 }
            }
        ]
    },
    // Level 30: World finale with closing wall and mixed pressure.
    {
        bubbles: [
            { x: 240, y: 150, size: 4, type: 'armored' },
            { x: 560, y: 150, size: 3, type: 'phaseShift' },
            { x: 400, y: 210, size: 3, type: 'rhythm' },
            { x: 300, y: 250, size: 2, type: 'fast' },
            { x: 500, y: 250, size: 2, type: 'zigzag' }
        ],
        closingWall: true
    },

    // ------------------------------
    // World 6 (Levels 31-36): Mastery Gauntlet
    // ------------------------------
    // Level 31: Tiny mix of fast, zigzag, and phase-shift.
    {
        bubbles: [
            { x: 140, y: 150, size: 1, type: 'fast' },
            { x: 220, y: 150, size: 1, type: 'zigzag' },
            { x: 300, y: 150, size: 1, type: 'phaseShift' },
            { x: 380, y: 150, size: 1, type: 'fast' },
            { x: 460, y: 150, size: 1, type: 'rhythm' },
            { x: 540, y: 150, size: 1, type: 'fast' },
            { x: 620, y: 150, size: 1, type: 'zigzag' },
            { x: 700, y: 150, size: 1, type: 'fast' },
            { x: 400, y: 220, size: 2, type: 'armored' }
        ]
    },
    // Level 32: Fast, phase-shift, and armored density + closing crush wall.
    {
        bubbles: [
            { x: 180, y: 150, size: 3, type: 'fast' },
            { x: 380, y: 150, size: 3, type: 'phaseShift' },
            { x: 580, y: 150, size: 3, type: 'ghost' },
            { x: 260, y: 220, size: 2, type: 'fast' },
            { x: 500, y: 220, size: 2, type: 'zigzag' },
        ],
        closingWall: true
    },
    // Level 33: Armored and phase-shift wall challenge.
    {
        bubbles: [
            { x: 260, y: 150, size: 4, type: 'armored' },
            { x: 540, y: 150, size: 4, type: 'phaseShift' },
            { x: 200, y: 230, size: 2, type: 'fast' },
            { x: 400, y: 230, size: 2, type: 'zigzag' },
            { x: 620, y: 230, size: 2, type: 'rhythm' }
        ],
        walls: [
            {
                x: 440,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 0, xMax: 440 }
            }
        ]
    },
    // Level 34: Speedy small swarm with armored anchor.
    {
        bubbles: [
            { x: 150, y: 150, size: 1, type: 'fast' },
            { x: 230, y: 150, size: 1, type: 'zigzag' },
            { x: 310, y: 150, size: 1, type: 'fast' },
            { x: 390, y: 150, size: 1, type: 'rhythm' },
            { x: 470, y: 150, size: 1, type: 'phaseShift' },
            { x: 550, y: 150, size: 1, type: 'fast' },
            { x: 630, y: 150, size: 1, type: 'zigzag' },
            { x: 710, y: 150, size: 1, type: 'fast' },
            { x: 400, y: 230, size: 2, type: 'armored' }
        ]
    },
    // Level 35: Dual boss bubbles with quick mids + closing crush wall.
    {
        bubbles: [
            { x: 260, y: 150, size: 4, type: 'heavy' },
            { x: 540, y: 150, size: 4, type: 'armored' },
            { x: 480, y: 230, size: 2, type: 'zigzag' },
            { x: 400, y: 230, size: 2, type: 'fast' }
        ],
        closingWall: true
    },
    // Level 36: Final mix with wall gate and every archetype.
    {
        bubbles: [
            { x: 220, y: 150, size: 4, type: 'phaseShift' },
            { x: 560, y: 150, size: 3, type: 'armored' },
            { x: 380, y: 200, size: 3, type: 'rhythm' },
            { x: 260, y: 240, size: 2, type: 'fast' },
            { x: 520, y: 240, size: 2, type: 'zigzag' },
            { x: 400, y: 260, size: 2, type: 'drifter' }
        ],
        walls: [
            {
                x: 400,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 0, xMax: 400 }
            }
        ]
    },

    // ------------------------------
    // World 7 (Levels 37-42): Vertical Labyrinth
    // ------------------------------
    // Level 37: Triple floors with mirrored ladders and mixed scouts.
    {
        bubbles: [
            { x: 180, y: 150, size: 2, type: 'drifter' },
            { x: 620, y: 150, size: 2, type: 'ghost' },
            { x: 400, y: 290, size: 3, type: 'rhythm' },
            { x: 250, y: 520, size: 2, type: 'fast' },
            { x: 550, y: 520, size: 2, type: 'zigzag' }
        ],
        platforms: [
            { x: 0, y: 250, width: 800, height: 22 },
            { x: 0, y: 450, width: 800, height: 22 }
        ],
        ladders: [
            { x: 80, y: 450, width: 28, height: 250 },
            { x: 692, y: 250, width: 28, height: 200 }
        ],
        ceilingSpikes: false
    },
    // Level 38: Central wall gate across two floors.
    {
        bubbles: [
            { x: 220, y: 150, size: 3, type: 'phaseShift' },
            { x: 580, y: 150, size: 3, type: 'armored' },
            { x: 320, y: 320, size: 2, type: 'fast' },
            { x: 500, y: 320, size: 2, type: 'teleport' },
            { x: 400, y: 520, size: 2, type: 'drifter' }
        ],
        walls: [
            {
                x: 400,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 0, xMax: 400 }
            }
        ],
        platforms: [
            { x: 0, y: 280, width: 800, height: 22 }
        ],
        ladders: [
            { x: 96, y: 280, width: 28, height: 420 }
        ],
        ceilingSpikes: false,
        lasers: [
            { x: 388, y: 280, width: 14, height: 420, interval: 200, activeFrames: 70 }
        ]
    },
    // Level 39: Closing wall pressure inside a layered map.
    {
        bubbles: [
            { x: 170, y: 150, size: 3, type: 'fast' },
            { x: 360, y: 160, size: 3, type: 'zigzag' },
            { x: 560, y: 160, size: 3, type: 'teleport' },
            { x: 260, y: 320, size: 2, type: 'ghost' },
            { x: 520, y: 320, size: 2, type: 'rhythm' }
        ],
        platforms: [
            { x: 0, y: 300, width: 800, height: 22 }
        ],
        ladders: [
            { x: 720, y: 300, width: 28, height: 400 }
        ],
        closingWall: true,
        ceilingSpikes: false,
        lasers: [
            { x: 220, y: 300, width: 12, height: 400, interval: 220, activeFrames: 80, phase: 30 },
            { x: 560, y: 300, width: 12, height: 400, interval: 220, activeFrames: 80, phase: 140 }
        ]
    },
    // Level 40: Tiny swarm above a heavy gate anchor.
    {
        bubbles: [
            { x: 140, y: 150, size: 1, type: 'fast' },
            { x: 220, y: 150, size: 1, type: 'zigzag' },
            { x: 300, y: 150, size: 1, type: 'phaseShift' },
            { x: 380, y: 150, size: 1, type: 'rhythm' },
            { x: 460, y: 150, size: 1, type: 'fast' },
            { x: 540, y: 150, size: 1, type: 'zigzag' },
            { x: 620, y: 150, size: 1, type: 'fast' },
            { x: 700, y: 150, size: 1, type: 'ghost' },
            { x: 400, y: 250, size: 3, type: 'volatile' }
        ],
        walls: [
            {
                x: 300,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 300, xMax: 800 }
            }
        ]
    },
    // Level 41: Gate + platform split with armored mid-boss.
    {
        bubbles: [
            { x: 220, y: 150, size: 3, type: 'armored' },
            { x: 580, y: 150, size: 3, type: 'teleport' },
            { x: 340, y: 320, size: 2, type: 'fast' },
            { x: 460, y: 320, size: 2, type: 'zigzag' },
            { x: 400, y: 520, size: 2, type: 'drifter' }
        ],
        walls: [
            {
                x: 500,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 0, xMax: 500 }
            }
        ],
        platforms: [
            { x: 0, y: 280, width: 800, height: 22 },
            { x: 0, y: 480, width: 800, height: 22 }
        ],
        ladders: [
            { x: 120, y: 480, width: 28, height: 220 },
            { x: 680, y: 280, width: 28, height: 200 }
        ],
        ceilingSpikes: false
    },
    // Level 42: World finale with all navigation tools enabled.
    {
        bubbles: [
            { x: 180, y: 150, size: 4, type: 'armored' },
            { x: 620, y: 150, size: 4, type: 'phaseShift' },
            { x: 310, y: 300, size: 2, type: 'rhythm' },
            { x: 490, y: 300, size: 2, type: 'zigzag' },
            { x: 240, y: 520, size: 2, type: 'fast' },
            { x: 560, y: 520, size: 2, type: 'ghost' }
        ],
        walls: [
            {
                x: 400,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 400, xMax: 800 }
            }
        ],
        platforms: [
            { x: 0, y: 260, width: 800, height: 22 },
            { x: 0, y: 460, width: 800, height: 22 }
        ],
        ladders: [
            { x: 70, y: 460, width: 28, height: 240 },
            { x: 700, y: 260, width: 28, height: 200 }
        ],
        closingWall: true,
        ceilingSpikes: false,
        lasers: [
            { x: 398, y: 260, width: 14, height: 440, interval: 150, activeFrames: 65 },
            { x: 120, y: 460, width: 10, height: 240, interval: 210, activeFrames: 70, phase: 80 },
            { x: 670, y: 460, width: 10, height: 240, interval: 210, activeFrames: 70, phase: 160 }
        ]
    },

    // ------------------------------
    // World 8 (Levels 43-48): Endgame Remix
    // ------------------------------
    // Level 43: High-density opener with a directional wall puzzle.
    {
        bubbles: [
            { x: 220, y: 150, size: 3, type: 'phaseShift' },
            { x: 400, y: 150, size: 3, type: 'rhythm' },
            { x: 580, y: 150, size: 3, type: 'armored' },
            { x: 300, y: 220, size: 2, type: 'fast' },
            { x: 500, y: 220, size: 2, type: 'zigzag' }
        ],
        walls: [
            {
                x: 360,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 0, xMax: 360 }
            }
        ]
    },
    // Level 44: Triple-floor endurance stage with no ceiling spikes.
    {
        bubbles: [
            { x: 170, y: 150, size: 2, type: 'ghost' },
            { x: 630, y: 150, size: 2, type: 'drifter' },
            { x: 320, y: 300, size: 2, type: 'phaseShift' },
            { x: 480, y: 300, size: 2, type: 'rhythm' },
            { x: 220, y: 520, size: 2, type: 'fast' },
            { x: 580, y: 520, size: 2, type: 'zigzag' }
        ],
        platforms: [
            { x: 0, y: 250, width: 800, height: 22 },
            { x: 0, y: 450, width: 800, height: 22 }
        ],
        ladders: [
            { x: 100, y: 450, width: 28, height: 250 },
            { x: 660, y: 250, width: 28, height: 200 }
        ],
        ceilingSpikes: false
    },
    // Level 45: Closing wall sprint against armored leadership.
    {
        bubbles: [
            { x: 240, y: 150, size: 4, type: 'armored' },
            { x: 560, y: 150, size: 3, type: 'fast' },
            { x: 340, y: 220, size: 2, type: 'teleport' },
            { x: 460, y: 240, size: 2, type: 'rhythm' },
            { x: 620, y: 260, size: 2, type: 'zigzag' }
        ],
        closingWall: true,
        lasers: [
            { x: 402, y: 120, width: 10, height: 580, interval: 180, activeFrames: 60 }
        ]
    },
    // Level 46: Dual wall checkpoints plus lower platform lane.
    {
        bubbles: [
            { x: 180, y: 150, size: 3, type: 'ghost' },
            { x: 400, y: 150, size: 3, type: 'armored' },
            { x: 620, y: 150, size: 3, type: 'teleport' },
            { x: 280, y: 500, size: 2, type: 'fast' },
            { x: 520, y: 500, size: 2, type: 'drifter' }
        ],
        walls: [
            {
                x: 260,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 260, xMax: 800 }
            },
            {
                x: 540,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 0, xMax: 540 }
            }
        ],
        platforms: [
            { x: 0, y: 460, width: 800, height: 22 }
        ],
        ladders: [
            { x: 86, y: 460, width: 28, height: 240 }
        ],
        ceilingSpikes: false,
        lasers: [
            { x: 240, y: 460, width: 12, height: 240, interval: 170, activeFrames: 55, phase: 20 },
            { x: 540, y: 460, width: 12, height: 240, interval: 170, activeFrames: 55, phase: 95 }
        ]
    },
    // Level 47: Hyper swarm before the final exam.
    {
        bubbles: [
            { x: 130, y: 150, size: 1, type: 'fast' },
            { x: 200, y: 150, size: 1, type: 'zigzag' },
            { x: 270, y: 150, size: 1, type: 'phaseShift' },
            { x: 340, y: 150, size: 1, type: 'rhythm' },
            { x: 410, y: 150, size: 1, type: 'fast' },
            { x: 480, y: 150, size: 1, type: 'zigzag' },
            { x: 550, y: 150, size: 1, type: 'fast' },
            { x: 620, y: 150, size: 1, type: 'ghost' },
            { x: 690, y: 150, size: 1, type: 'fast' },
            { x: 400, y: 230, size: 2, type: 'armored' }
        ],
        closingWall: true
    },
    // Level 48: Final gauntlet with every obstacle type combined.
    {
        bubbles: [
            { x: 190, y: 150, size: 4, type: 'armored' },
            { x: 610, y: 150, size: 4, type: 'phaseShift' },
            { x: 320, y: 220, size: 3, type: 'rhythm' },
            { x: 480, y: 220, size: 3, type: 'ghost' },
            { x: 240, y: 500, size: 2, type: 'fast' },
            { x: 560, y: 500, size: 2, type: 'zigzag' }
        ],
        walls: [
            {
                x: 400,
                width: 18,
                doorHeight: 68,
                unlockRegion: { xMin: 0, xMax: 400 }
            }
        ],
        platforms: [
            { x: 0, y: 260, width: 800, height: 22 },
            { x: 0, y: 460, width: 800, height: 22 }
        ],
        ladders: [
            { x: 72, y: 460, width: 28, height: 240 },
            { x: 700, y: 260, width: 28, height: 200 }
        ],
        closingWall: true,
        ceilingSpikes: false,
        lasers: [
            { x: 398, y: 260, width: 14, height: 440, interval: 150, activeFrames: 65 },
            { x: 120, y: 460, width: 10, height: 240, interval: 210, activeFrames: 70, phase: 80 },
            { x: 670, y: 460, width: 10, height: 240, interval: 210, activeFrames: 70, phase: 160 }
        ]
    }
];
