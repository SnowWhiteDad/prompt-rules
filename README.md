# Vibe Coder - Prompt Rules Generator

A modern web application that generates secure prompt rules for AI coding tools based on OWASP LLM Top 10 threats and [Wiz Secure Rules Files](https://github.com/wiz-sec-public/secure-rules-files). This tool helps developers create comprehensive security configurations for their AI-powered coding environments. The tool is live at [https://snowwhitedad.github.io/prompt-rules/](https://snowwhitedad.github.io/prompt-rules/).

## 🚀 Features

### Core Functionality

- **OWASP LLM Top 10 Integration**: Generates rules based on the latest OWASP LLM security threats
- **Wiz Baseline Rules Integration**: Incorporates industry-tested security rules from Wiz Security
- **Multi-Tool Support**: Supports popular AI coding tools including:
  - Cursor AI
  - Claude Code
  - GitHub Copilot
  - VS Code Extensions
  - JetBrains AI
  - Cline
  - Windsurf
  - Codex
  - Aider
  - Custom AI tools

### Security Levels

- **Basic**: Essential security measures for development
- **Standard**: Comprehensive security for most projects
- **Strict**: Enhanced security for sensitive applications
- **Paranoid**: Maximum security with manual review requirements

### Project Types

- Web Applications
- Mobile Applications
- API/Backend Services
- Desktop Applications
- Libraries/Frameworks
- General Purpose

### Language Support

- JavaScript/TypeScript (React, Node.js)
- Python (Flask, Django)
- Java (Spring)
- C# (.NET ASP.NET Core)
- C Programming
- Go
- Rust
- PHP
- Ruby
- Swift
- Kotlin
- General (for any language)

> [!NOTE]
Available rules are based on Selected tool, Project type and language combinations. Rules are not guaranteed to cover all possible scenarios or vulnerabilities.

## 🛡️ OWASP LLM Top 10 Threats Covered

1. **LLM-01: Prompt Injection** - Critical
2. **LLM-02: Insecure Output Handling** - High
3. **LLM-03: Training Data Poisoning** - High
4. **LLM-04: Model Denial of Service** - Medium
5. **LLM-05: Supply Chain Vulnerabilities** - High
6. **LLM-06: Sensitive Information Disclosure** - Critical
7. **LLM-07: Insecure Plugin Design** - High
8. **LLM-08: Excessive Agency** - Medium
9. **LLM-09: Overreliance** - Medium
10. **LLM-10: Model Theft** - High

## 🎯 How It Works

1. **Select Your Tool**: Choose from supported AI coding tools
2. **Configure Settings**: Set project type, security level, and programming language
3. **Generate Rules**: Create comprehensive security rules based on OWASP threats
4. **Download & Apply**: Get native configuration files with setup instructions

## 📁 File Structure

```
vibe-coder/
├── index.html          # Main application interface
├── styles.css          # Modern, responsive styling
├── script.js           # Core application logic
└── README.md           # This documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start generating security rules!

### Usage

#### Step 1: Select Your AI Tool
Choose from the available AI coding tools:
- **Cursor**: AI-powered code editor
- **Claude Code**: Anthropic's coding assistant
- **GitHub Copilot**: GitHub's AI pair programmer
- **VS Code Extensions**: Visual Studio Code AI tools
- **JetBrains AI**: JetBrains IDE AI assistants
- **Cline**: AI-powered command line assistant
- **Windsurf**: AI coding assistant
- **Codex**: OpenAI's code generation model
- **Aider**: AI-powered code editing assistant
- **Custom Tool**: Generic rules for any AI tool

#### Step 2: Configure Your Project
- **Project Type**: Select the type of application you're building
- **Security Level**: Choose the appropriate security strictness
- **Language**: Select your primary programming language

#### Step 3: Generate and Download
- Click "Generate Security Rules" to create your configuration
- Review the generated rules in the preview
- Copy to clipboard or download the native configuration file
- Follow the setup instructions to apply the rules

## 📋 Generated Rules Structure

Each generated configuration file includes:

### Header Information
- Tool-specific configuration header
- Project metadata (type, security level, language)
- Generation timestamp

### OWASP Threat Mitigation
- Specific rules for each applicable OWASP threat
- Language-specific security patterns
- Recommended security libraries and tools

### Project-Specific Rules
- Security best practices for the selected project type
- Framework and platform-specific recommendations

### Language-Specific Rules
- Dangerous patterns to avoid
- Recommended security libraries
- Language-specific best practices

### Setup Instructions
- Tool-specific configuration steps
- File placement instructions
- Additional security recommendations
- Support resources and links

## 🔧 Tool-Specific Configurations

### Cursor AI
- **File Extension**: `.cursorrules`
- **Location**: Project root directory
- **Features**: AI assistant security rules and behavior controls

### Claude Code
- **File Extension**: `CLAUDE.md`
- **Location**: Project configuration or system prompts
- **Features**: Claude-specific security guidelines based on Wiz baseline rules

### GitHub Copilot
- **File Extension**: `Copilot Instructions`
- **Location**: Project settings
- **Features**: Copilot behavior and security controls based on Wiz baseline rules

### VS Code Extensions
- **File Extension**: `.vscode-rules`
- **Location**: Workspace settings
- **Features**: AI extension security configurations

### JetBrains AI
- **File Extension**: `.jetbrains-rules`
- **Location**: IDE configuration
- **Features**: JetBrains AI assistant security rules

### Custom Tools
- **File Extension**: `.ai-rules`
- **Location**: Tool-specific configuration
- **Features**: Generic AI tool security guidelines

### Additional Tools (Wiz Supported)
- **Cline**: `Cline Rules` - AI-powered command line assistant
- **Windsurf**: `Windsurf Rules` - AI coding assistant
- **Codex**: `AGENTS.md` - OpenAI's code generation model
- **Aider**: `Aider Conventions` - AI-powered code editing assistant

## 🎨 Design Features

### Modern UI/UX
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Engaging user interactions
- **Accessibility**: Keyboard navigation and screen reader support
- **Dark/Light Theme**: Automatic theme detection

### User Experience
- **Intuitive Interface**: Easy-to-follow workflow
- **Real-time Preview**: See generated rules before downloading
- **Copy & Download**: Multiple ways to save your configuration
- **Visual Feedback**: Clear success and error states

## 🔒 Security Features

### Input Validation
- Client-side validation for all user inputs
- Sanitization of generated content
- XSS protection in the interface

### Data Privacy
- No data sent to external servers
- All processing happens locally
- No user data collection or storage

### Secure Downloads
- Safe file generation and download
- Proper MIME type handling
- Secure blob creation and cleanup

## 🌐 Browser Support

- **Chrome**: 80+
- **Firefox**: 75+
- **Safari**: 13+
- **Edge**: 80+

## 📚 Resources

### OWASP Resources
- [OWASP LLM Top 10](https://owasp.org/www-project-ai-security-and-privacy-guide/)
- [Wiz Secure Rules Files](https://github.com/wiz-sec-public/secure-rules-files)
- [AI Security Best Practices](https://ai-security.org/)
- [Secure AI Development](https://secure-ai.dev/)

### Tool Documentation
- [Cursor Documentation](https://cursor.sh/docs)
- [Claude Code Documentation](https://docs.anthropic.com/)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [VS Code AI Extensions](https://code.visualstudio.com/docs/editor/artificial-intelligence)
- [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Areas for Contribution
- Additional AI tool support
- New security threat patterns
- Language-specific security rules
- UI/UX improvements
- Documentation updates

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **OWASP**: For the LLM Top 10 security framework
- **Wiz Security**: For the comprehensive baseline rules files and security research
- **AI Tool Providers**: For their security documentation and best practices
- **Security Community**: For ongoing research and contributions to AI security

## 📞 Support

If you encounter any issues or have questions:

1. Check the [OWASP LLM Top 10 documentation](https://owasp.org/www-project-ai-security-and-privacy-guide/)
2. Review the tool-specific documentation for your AI coding tool
3. Open an issue in the project repository

---

**Note**: This tool generates security rules based on best practices and OWASP guidelines. Always review and customize the generated rules for your specific use case and security requirements. 
