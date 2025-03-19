import { defineConfig, createSystem, defaultConfig } from '@chakra-ui/react'

import { defineTextStyles } from '@chakra-ui/react'

export const textStyles = defineTextStyles({
  responsiveHeading: {
    value: {
      fontSize: ['20px', '24px', '28px'],
      fontWeight: 'bold'
    }
  },
  responsiveSubHeading: {
    value: {
      fontSize: ['14px', '16px', '18px']
    }
  },
  responsiveText: {
    value: {
      fontSize: ['12px', '14px', '16px']
    }
  }
})

const customConfig = defineConfig({
  theme: {
    textStyles,
    tokens: {
      fonts: {
        heading: { value: 'var(--font-poppins)' },
        body: { value: 'var(--font-poppins)' }
      },
      colors: {
        primary: {
          50: { value: '#e6f9f0' },
          100: { value: '#c2e8d6' },
          200: { value: '#9dd6bb' },
          300: { value: '#78c5a1' },
          400: { value: '#54b487' },
          500: { value: '#38a169' },
          600: { value: '#2f855a' },
          700: { value: '#276749' },
          800: { value: '#22543d' },
          900: { value: '#1c4532' }
        },
        secondary: {
          50: { value: '#e3f2fd' },
          100: { value: '#bbdefb' },
          200: { value: '#90caf9' },
          300: { value: '#64b5f6' },
          400: { value: '#42a5f5' },
          500: { value: '#2196f3' },
          600: { value: '#1e88e5' },
          700: { value: '#1976d2' },
          800: { value: '#1565c0' },
          900: { value: '#0d47a1' }
        },
        tertiary: {
          50: { value: '#f3e5f5' },
          100: { value: '#e1bee7' },
          200: { value: '#ce93d8' },
          300: { value: '#ba68c8' },
          400: { value: '#ab47bc' },
          500: { value: '#9c27b0' },
          600: { value: '#8e24aa' },
          700: { value: '#7b1fa2' },
          800: { value: '#6a1b9a' },
          900: { value: '#4a148c' }
        },
        background: {
          50: { value: '#f7fafc' },
          100: { value: '#edf2f7' },
          200: { value: '#e2e8f0' },
          300: { value: '#cbd5e0' },
          400: { value: '#a0aec0' },
          500: { value: '#718096' },
          600: { value: '#4a5568' },
          700: { value: '#2d3748' },
          800: { value: '#1a202c' },
          900: { value: '#171923' }
        },
        foreground: {
          50: { value: '#171923' },
          100: { value: '#1a202c' },
          200: { value: '#2d3748' },
          300: { value: '#4a5568' },
          400: { value: '#718096' },
          500: { value: '#a0aec0' },
          600: { value: '#cbd5e0' },
          700: { value: '#e2e8f0' },
          800: { value: '#edf2f7' },
          900: { value: '#f7fafc' }
        }
      }
    },
    semanticTokens: {
      colors: {
        primary: {
          solid: {
            value: { _light: '{colors.green.500}', _dark: '{colors.green.300}' }
          },
          contrast: {
            value: { _light: '{colors.white}', _dark: '{colors.gray.800}' }
          },
          fg: {
            value: { _light: '{colors.green.700}', _dark: '{colors.green.200}' }
          },
          muted: {
            value: { _light: '{colors.green.100}', _dark: '{colors.green.700}' }
          },
          subtle: {
            value: { _light: '{colors.green.200}', _dark: '{colors.green.600}' }
          },
          emphasized: {
            value: { _light: '{colors.green.300}', _dark: '{colors.green.500}' }
          },
          focusRing: {
            value: { _light: '{colors.green.500}', _dark: '{colors.green.300}' }
          }
        },
        secondary: {
          solid: {
            value: { _light: '{colors.blue.500}', _dark: '{colors.blue.300}' }
          },
          contrast: {
            value: { _light: '{colors.white}', _dark: '{colors.gray.800}' }
          },
          fg: {
            value: { _light: '{colors.blue.700}', _dark: '{colors.blue.200}' }
          },
          muted: {
            value: { _light: '{colors.blue.100}', _dark: '{colors.blue.700}' }
          },
          subtle: {
            value: { _light: '{colors.blue.200}', _dark: '{colors.blue.600}' }
          },
          emphasized: {
            value: { _light: '{colors.blue.300}', _dark: '{colors.blue.500}' }
          },
          focusRing: {
            value: { _light: '{colors.blue.500}', _dark: '{colors.blue.300}' }
          }
        },
        tertiary: {
          solid: {
            value: {
              _light: '{colors.purple.500}',
              _dark: '{colors.purple.300}'
            }
          },
          contrast: {
            value: { _light: '{colors.white}', _dark: '{colors.gray.800}' }
          },
          fg: {
            value: {
              _light: '{colors.purple.700}',
              _dark: '{colors.purple.200}'
            }
          },
          muted: {
            value: {
              _light: '{colors.purple.100}',
              _dark: '{colors.purple.700}'
            }
          },
          subtle: {
            value: {
              _light: '{colors.purple.200}',
              _dark: '{colors.purple.600}'
            }
          },
          emphasized: {
            value: {
              _light: '{colors.purple.300}',
              _dark: '{colors.purple.500}'
            }
          },
          focusRing: {
            value: {
              _light: '{colors.purple.500}',
              _dark: '{colors.purple.300}'
            }
          }
        },
        background: {
          DEFAULT: {
            value: { _light: '{colors.gray.50}', _dark: '{colors.gray.900}' }
          }
        },
        foreground: {
          DEFAULT: {
            value: { _light: '{colors.gray.900}', _dark: '{colors.gray.50}' }
          }
        }
      }
    }
  }
})

export const system = createSystem(defaultConfig, customConfig)
