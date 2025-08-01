// OWASP LLM Top 10 Threats Data
const OWASP_THREATS = [
    {
        id: 'llm-01',
        title: 'LLM-01: Prompt Injection',
        description: 'Manipulating LLM behavior through crafted inputs to bypass security measures or extract sensitive information.',
        severity: 'Critical'
    },
    {
        id: 'llm-02',
        title: 'LLM-02: Insecure Output Handling',
        description: 'Failing to validate and sanitize LLM outputs before processing, leading to code injection or data exposure.',
        severity: 'High'
    },
    {
        id: 'llm-03',
        title: 'LLM-03: Training Data Poisoning',
        description: 'Corrupting training data to influence model behavior or introduce backdoors in the system.',
        severity: 'High'
    },
    {
        id: 'llm-04',
        title: 'LLM-04: Model Denial of Service',
        description: 'Overwhelming LLM resources through excessive requests or complex prompts to disrupt service.',
        severity: 'Medium'
    },
    {
        id: 'llm-05',
        title: 'LLM-05: Supply Chain Vulnerabilities',
        description: 'Compromising LLM systems through vulnerable dependencies, models, or training data sources.',
        severity: 'High'
    },
    {
        id: 'llm-06',
        title: 'LLM-06: Sensitive Information Disclosure',
        description: 'Exposing confidential data through LLM responses, training data, or system configurations.',
        severity: 'Critical'
    },
    {
        id: 'llm-07',
        title: 'LLM-07: Insecure Plugin Design',
        description: 'Creating plugins that can be exploited to access unauthorized resources or perform malicious actions.',
        severity: 'High'
    },
    {
        id: 'llm-08',
        title: 'LLM-08: Excessive Agency',
        description: 'Granting LLMs excessive permissions that could lead to unintended actions or security breaches.',
        severity: 'Medium'
    },
    {
        id: 'llm-09',
        title: 'LLM-09: Overreliance',
        description: 'Trusting LLM outputs without proper validation, leading to incorrect decisions or security gaps.',
        severity: 'Medium'
    },
    {
        id: 'llm-10',
        title: 'LLM-10: Model Theft',
        description: 'Unauthorized access to or extraction of proprietary LLM models, weights, or training data.',
        severity: 'High'
    }
];

// Tool-specific configurations (Enhanced with Wiz baseline rules)
const TOOL_CONFIGS = {
    cursor: {
        name: 'Cursor',
        fileExtension: '.cursorrules',
        setupInstructions: {
            basic: 'Create a .cursorrules file in your project root directory. Based on Wiz baseline rules for enhanced security.',
            standard: 'Create a .cursorrules file in your project root and configure your Cursor settings to use it. Incorporates Wiz security best practices.',
            strict: 'Create a .cursorrules file in your project root, configure Cursor settings, and enable strict mode. Uses comprehensive Wiz security rules.',
            paranoid: 'Create a .cursorrules file in your project root, configure Cursor settings, enable strict mode, and review all AI suggestions manually. Implements Wiz paranoid-level security.'
        }
    },
    claude: {
        name: 'Claude Code',
        fileExtension: 'CLAUDE.md',
        setupInstructions: {
            basic: 'Add these rules to your Claude Code configuration or use them as system prompts. Based on Wiz baseline rules.',
            standard: 'Configure Claude Code with these rules in your project settings or IDE integration. Incorporates Wiz security best practices.',
            strict: 'Configure Claude Code with these rules and enable additional security checks in your development environment. Uses comprehensive Wiz security rules.',
            paranoid: 'Configure Claude Code with these rules, enable all security checks, and implement manual review processes. Implements Wiz paranoid-level security.'
        }
    },
    'github-copilot': {
        name: 'GitHub Copilot',
        fileExtension: 'Copilot Instructions',
        setupInstructions: {
            basic: 'Add these rules to your GitHub Copilot configuration file. Based on Wiz baseline rules.',
            standard: 'Configure GitHub Copilot with these rules in your project settings. Incorporates Wiz security best practices.',
            strict: 'Configure GitHub Copilot with these rules and enable additional security features. Uses comprehensive Wiz security rules.',
            paranoid: 'Configure GitHub Copilot with these rules, enable all security features, and implement code review processes. Implements Wiz paranoid-level security.'
        }
    },
    vscode: {
        name: 'VS Code Extensions',
        fileExtension: '.vscode-rules',
        setupInstructions: {
            basic: 'Add these rules to your VS Code workspace settings or extension configuration.',
            standard: 'Configure your VS Code AI extensions with these rules in your workspace settings.',
            strict: 'Configure your VS Code AI extensions with these rules and enable additional security extensions.',
            paranoid: 'Configure your VS Code AI extensions with these rules, enable security extensions, and implement manual review processes.'
        }
    },
    jetbrains: {
        name: 'JetBrains AI',
        fileExtension: '.jetbrains-rules',
        setupInstructions: {
            basic: 'Add these rules to your JetBrains IDE AI assistant configuration.',
            standard: 'Configure your JetBrains AI assistant with these rules in your project settings.',
            strict: 'Configure your JetBrains AI assistant with these rules and enable additional security features.',
            paranoid: 'Configure your JetBrains AI assistant with these rules, enable security features, and implement manual review processes.'
        }
    },
    custom: {
        name: 'Custom Tool',
        fileExtension: '.ai-rules',
        setupInstructions: {
            basic: 'Add these rules to your AI tool configuration file.',
            standard: 'Configure your AI tool with these rules in your project settings.',
            strict: 'Configure your AI tool with these rules and enable additional security features.',
            paranoid: 'Configure your AI tool with these rules, enable security features, and implement manual review processes.'
        }
    },
    cline: {
        name: 'Cline',
        fileExtension: 'Cline Rules',
        setupInstructions: {
            basic: 'Add these rules to your Cline configuration. Based on Wiz baseline rules.',
            standard: 'Configure Cline with these rules in your project settings. Incorporates Wiz security best practices.',
            strict: 'Configure Cline with these rules and enable additional security features. Uses comprehensive Wiz security rules.',
            paranoid: 'Configure Cline with these rules, enable all security features, and implement manual review processes. Implements Wiz paranoid-level security.'
        }
    },
    windsurf: {
        name: 'Windsurf',
        fileExtension: 'Windsurf Rules',
        setupInstructions: {
            basic: 'Add these rules to your Windsurf configuration. Based on Wiz baseline rules.',
            standard: 'Configure Windsurf with these rules in your project settings. Incorporates Wiz security best practices.',
            strict: 'Configure Windsurf with these rules and enable additional security features. Uses comprehensive Wiz security rules.',
            paranoid: 'Configure Windsurf with these rules, enable all security features, and implement manual review processes. Implements Wiz paranoid-level security.'
        }
    },
    codex: {
        name: 'Codex',
        fileExtension: 'AGENTS.md',
        setupInstructions: {
            basic: 'Add these rules to your Codex configuration. Based on Wiz baseline rules.',
            standard: 'Configure Codex with these rules in your project settings. Incorporates Wiz security best practices.',
            strict: 'Configure Codex with these rules and enable additional security features. Uses comprehensive Wiz security rules.',
            paranoid: 'Configure Codex with these rules, enable all security features, and implement manual review processes. Implements Wiz paranoid-level security.'
        }
    },
    aider: {
        name: 'Aider',
        fileExtension: 'Aider Conventions',
        setupInstructions: {
            basic: 'Add these rules to your Aider configuration. Based on Wiz baseline rules.',
            standard: 'Configure Aider with these rules in your project settings. Incorporates Wiz security best practices.',
            strict: 'Configure Aider with these rules and enable additional security features. Uses comprehensive Wiz security rules.',
            paranoid: 'Configure Aider with these rules, enable all security features, and implement manual review processes. Implements Wiz paranoid-level security.'
        }
    }
};

// Wiz Baseline Rules Integration
const WIZ_BASELINE_RULES = {
    python: {
        flask: {
            name: 'Python Flask',
            description: 'Secure rules for Flask web applications',
            rules: [
                'Always validate and sanitize user inputs',
                'Use Flask-WTF for CSRF protection',
                'Implement proper session management',
                'Use HTTPS in production',
                'Validate file uploads and restrict file types',
                'Use parameterized queries to prevent SQL injection',
                'Implement rate limiting',
                'Use secure headers with Flask-Talisman',
                'Log security events',
                'Keep dependencies updated'
            ]
        },
        django: {
            name: 'Python Django',
            description: 'Secure rules for Django web applications',
            rules: [
                'Use Django forms for input validation',
                'Enable CSRF protection',
                'Use Django ORM to prevent SQL injection',
                'Implement proper authentication',
                'Use Django security middleware',
                'Validate file uploads',
                'Use HTTPS in production',
                'Implement rate limiting',
                'Keep Django and dependencies updated',
                'Use Django security best practices'
            ]
        }
    },
    javascript: {
        react: {
            name: 'JavaScript React',
            description: 'Secure rules for React applications',
            rules: [
                'Validate all props and state',
                'Use React security best practices',
                'Implement proper authentication',
                'Use HTTPS for API calls',
                'Sanitize user inputs',
                'Use Content Security Policy',
                'Implement proper error handling',
                'Use secure dependencies',
                'Validate API responses',
                'Implement proper session management'
            ]
        },
        nodejs: {
            name: 'JavaScript Node.js',
            description: 'Secure rules for Node.js applications',
            rules: [
                'Validate all inputs',
                'Use parameterized queries',
                'Implement proper authentication',
                'Use HTTPS in production',
                'Sanitize user inputs',
                'Implement rate limiting',
                'Use secure headers',
                'Log security events',
                'Keep dependencies updated',
                'Use security middleware'
            ]
        }
    },
    java: {
        spring: {
            name: 'Java Spring',
            description: 'Secure rules for Spring applications',
            rules: [
                'Use Spring Security',
                'Validate all inputs',
                'Use parameterized queries',
                'Implement proper authentication',
                'Use HTTPS in production',
                'Sanitize user inputs',
                'Implement rate limiting',
                'Use secure headers',
                'Log security events',
                'Keep dependencies updated'
            ]
        }
    },
    dotnet: {
        aspnetcore: {
            name: '.NET ASP.NET Core',
            description: 'Secure rules for ASP.NET Core applications',
            rules: [
                'Use ASP.NET Core Identity',
                'Validate all inputs',
                'Use parameterized queries',
                'Implement proper authentication',
                'Use HTTPS in production',
                'Sanitize user inputs',
                'Implement rate limiting',
                'Use secure headers',
                'Log security events',
                'Keep dependencies updated'
            ]
        }
    },
    c: {
        general: {
            name: 'C Programming',
            description: 'Secure rules for C applications',
            rules: [
                'Validate all inputs',
                'Use bounds checking',
                'Avoid buffer overflows',
                'Use secure string functions',
                'Implement proper error handling',
                'Use secure random number generation',
                'Validate file operations',
                'Use secure memory management',
                'Implement proper authentication',
                'Keep dependencies updated'
            ]
        }
    }
};

// Language-specific security patterns
const LANGUAGE_PATTERNS = {
    javascript: {
        injection: ['eval()', 'Function()', 'setTimeout()', 'setInterval()', 'innerHTML', 'outerHTML'],
        sanitization: ['DOMPurify', 'xss', 'html-entities', 'validator.js'],
        validation: ['joi', 'yup', 'ajv', 'express-validator']
    },
    python: {
        injection: ['eval()', 'exec()', 'os.system()', 'subprocess.call()', 'pickle.loads()'],
        sanitization: ['bleach', 'markupsafe', 'html.escape()', 'urllib.parse.quote()'],
        validation: ['pydantic', 'marshmallow', 'cerberus', 'voluptuous']
    },
    java: {
        injection: ['Runtime.exec()', 'ProcessBuilder', 'ScriptEngine', 'ObjectInputStream'],
        sanitization: ['OWASP Java HTML Sanitizer', 'jsoup', 'Apache Commons Text'],
        validation: ['Bean Validation', 'Hibernate Validator', 'Apache Commons Validator']
    },
    csharp: {
        injection: ['Process.Start()', 'Assembly.Load()', 'Type.GetType()', 'Eval()'],
        sanitization: ['AntiXSS', 'HtmlAgilityPack', 'System.Web.HttpUtility.HtmlEncode()'],
        validation: ['FluentValidation', 'DataAnnotations', 'System.ComponentModel.DataAnnotations']
    },
    go: {
        injection: ['exec.Command()', 'os/exec', 'text/template', 'html/template'],
        sanitization: ['bluemonday', 'html.EscapeString()', 'url.QueryEscape()'],
        validation: ['go-playground/validator', 'asaskevich/govalidator']
    },
    rust: {
        injection: ['std::process::Command', 'std::env::var', 'serde_json::from_str()'],
        sanitization: ['ammonia', 'html_escape', 'urlencoding'],
        validation: ['validator', 'serde_valid', 'derive_more']
    },
    php: {
        injection: ['eval()', 'exec()', 'system()', 'shell_exec()', 'passthru()'],
        sanitization: ['htmlspecialchars()', 'strip_tags()', 'filter_var()', 'htmlentities()'],
        validation: ['Respect\Validation', 'Symfony Validator', 'Laravel Validation']
    },
    ruby: {
        injection: ['eval()', 'system()', 'exec()', '`command`', 'Kernel.exec()'],
        sanitization: ['Loofah', 'Sanitize', 'CGI.escapeHTML()', 'ERB::Util.html_escape()'],
        validation: ['ActiveModel::Validations', 'dry-validation', 'Virtus']
    },
    swift: {
        injection: ['Process()', 'NSTask', 'NSScript', 'NSAppleScript'],
        sanitization: ['String.addingPercentEncoding()', 'CFURLCreateStringByAddingPercentEscapes()'],
        validation: ['ValidatedPropertyKit', 'Validator']
    },
    kotlin: {
        injection: ['Runtime.getRuntime().exec()', 'ProcessBuilder', 'ScriptEngine'],
        sanitization: ['StringEscapeUtils', 'HtmlUtils', 'URLEncoder.encode()'],
        validation: ['Bean Validation', 'Konform', 'Valiktor']
    },
    general: {
        injection: ['eval', 'exec', 'system', 'shell', 'command'],
        sanitization: ['escape', 'sanitize', 'purify', 'clean'],
        validation: ['validate', 'verify', 'check', 'assert']
    }
};

// Security level configurations
const SECURITY_LEVELS = {
    basic: {
        name: 'Basic',
        description: 'Essential security measures for development',
        rulesCount: 5,
        strictness: 1
    },
    standard: {
        name: 'Standard',
        description: 'Comprehensive security for most projects',
        rulesCount: 8,
        strictness: 2
    },
    strict: {
        name: 'Strict',
        description: 'Enhanced security for sensitive applications',
        rulesCount: 10,
        strictness: 3
    },
    paranoid: {
        name: 'Paranoid',
        description: 'Maximum security with manual review requirements',
        rulesCount: 12,
        strictness: 4
    }
};

// DOM Elements
let selectedTool = null;
let currentRules = '';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    populateThreatsGrid();
}

function setupEventListeners() {
    // Tool selection
    document.querySelectorAll('.tool-card').forEach(card => {
        card.addEventListener('click', () => selectTool(card.dataset.tool));
    });

    // Back to tools button
    document.getElementById('backToTools').addEventListener('click', showToolSelection);

    // Generate rules button
    document.getElementById('generateRules').addEventListener('click', generateRules);

    // Copy and download buttons
    document.getElementById('copyRules').addEventListener('click', copyRules);
    document.getElementById('downloadRules').addEventListener('click', downloadRules);

    // Customization options
    document.getElementById('projectType').addEventListener('change', updateRulesPreview);
    document.getElementById('securityLevel').addEventListener('change', updateRulesPreview);
    document.getElementById('language').addEventListener('change', updateRulesPreview);
}

function populateThreatsGrid() {
    const threatsGrid = document.getElementById('threatsGrid');
    threatsGrid.innerHTML = '';

    OWASP_THREATS.forEach(threat => {
        const threatCard = document.createElement('div');
        threatCard.className = 'threat-card';
        threatCard.innerHTML = `
            <h4><i class="fas fa-exclamation-triangle"></i> ${threat.title}</h4>
            <p>${threat.description}</p>
            <small><strong>Severity:</strong> ${threat.severity}</small>
        `;
        threatsGrid.appendChild(threatCard);
    });
}

function selectTool(toolId) {
    selectedTool = toolId;
    
    // Update UI
    document.querySelectorAll('.tool-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.querySelector(`[data-tool="${toolId}"]`).classList.add('selected');
    
    // Show rules generator
    document.querySelector('.tool-selection').style.display = 'none';
    document.getElementById('rulesGenerator').style.display = 'block';
    
    // Update tool name
    document.getElementById('toolName').textContent = TOOL_CONFIGS[toolId].name;
    
    // Generate initial rules preview
    updateRulesPreview();
}

function showToolSelection() {
    document.querySelector('.tool-selection').style.display = 'block';
    document.getElementById('rulesGenerator').style.display = 'none';
    selectedTool = null;
}

function updateRulesPreview() {
    if (!selectedTool) return;
    
    const projectType = document.getElementById('projectType').value;
    const securityLevel = document.getElementById('securityLevel').value;
    const language = document.getElementById('language').value;
    
    const rules = generateToolSpecificRules(selectedTool, projectType, securityLevel, language);
    currentRules = rules;
    
    // Update preview
    document.getElementById('rulesPreview').innerHTML = formatRulesForDisplay(rules);
}

function generateRules() {
    if (!selectedTool) return;
    
    updateRulesPreview();
    document.getElementById('rulesOutput').style.display = 'block';
    
    // Scroll to output
    document.getElementById('rulesOutput').scrollIntoView({ behavior: 'smooth' });
}

function generateToolSpecificRules(toolId, projectType, securityLevel, language) {
    const toolConfig = TOOL_CONFIGS[toolId];
    const securityConfig = SECURITY_LEVELS[securityLevel];
    const languagePatterns = LANGUAGE_PATTERNS[language];
    
    let rules = `# ${toolConfig.name} Security Rules\n`;
    rules += `# Generated based on OWASP LLM Top 10 Threats and Wiz Baseline Rules\n`;
    rules += `# Project Type: ${projectType}\n`;
    rules += `# Security Level: ${securityConfig.name}\n`;
    rules += `# Language: ${language}\n\n`;
    
    // Add tool-specific header
    rules += generateToolHeader(toolId, toolConfig);
    
    // Add OWASP threat-based rules
    rules += generateOWASPRules(securityLevel, languagePatterns);
    
    // Add project type specific rules
    rules += generateProjectTypeRules(projectType, languagePatterns);
    
    // Add language-specific rules
    rules += generateLanguageSpecificRules(language, languagePatterns);
    
    // Add setup instructions
    rules += generateSetupInstructions(toolConfig, securityLevel);
    
    return rules;
}

function generateToolHeader(toolId, toolConfig) {
    const headers = {
        cursor: `# Cursor AI Security Configuration
# Place this file in your project root as .cursorrules

# Security Rules for Cursor AI Assistant
# These rules help prevent common LLM security vulnerabilities

`,
        claude: `# Claude Code Security Rules
# Use these rules in your Claude Code configuration

# Security Rules for Claude Code Assistant
# These rules help prevent common LLM security vulnerabilities

`,
        'github-copilot': `# GitHub Copilot Security Rules
# Add these rules to your .copilot-rules file

# Security Rules for GitHub Copilot
# These rules help prevent common LLM security vulnerabilities

`,
        vscode: `# VS Code AI Extensions Security Rules
# Add these rules to your VS Code workspace settings

# Security Rules for VS Code AI Extensions
# These rules help prevent common LLM security vulnerabilities

`,
        jetbrains: `# JetBrains AI Security Rules
# Add these rules to your JetBrains IDE configuration

# Security Rules for JetBrains AI Assistant
# These rules help prevent common LLM security vulnerabilities

`,
        custom: `# Custom AI Tool Security Rules
# Add these rules to your AI tool configuration

# Security Rules for AI Development Tools
# These rules help prevent common LLM security vulnerabilities

`
    };
    
    return headers[toolId] || headers.custom;
}

function generateOWASPRules(securityLevel, languagePatterns) {
    let rules = `## OWASP LLM Top 10 Threat Mitigation\n\n`;
    
    const selectedThreats = OWASP_THREATS.slice(0, SECURITY_LEVELS[securityLevel].rulesCount);
    
    selectedThreats.forEach(threat => {
        rules += `### ${threat.title}\n`;
        rules += `# ${threat.description}\n\n`;
        
        switch (threat.id) {
            case 'llm-01':
                rules += generatePromptInjectionRules(languagePatterns);
                break;
            case 'llm-02':
                rules += generateOutputHandlingRules(languagePatterns);
                break;
            case 'llm-03':
                rules += generateDataPoisoningRules();
                break;
            case 'llm-04':
                rules += generateDoSProtectionRules();
                break;
            case 'llm-05':
                rules += generateSupplyChainRules();
                break;
            case 'llm-06':
                rules += generateInfoDisclosureRules();
                break;
            case 'llm-07':
                rules += generatePluginSecurityRules();
                break;
            case 'llm-08':
                rules += generateAgencyControlRules();
                break;
            case 'llm-09':
                rules += generateOverrelianceRules();
                break;
            case 'llm-10':
                rules += generateModelTheftRules();
                break;
        }
        
        rules += '\n';
    });
    
    return rules;
}

function generatePromptInjectionRules(languagePatterns) {
    return `# Prevent prompt injection attacks
- Never trust user input directly in prompts
- Always validate and sanitize user inputs
- Use parameterized prompts instead of string concatenation
- Implement input length limits
- Add system prompts that define security boundaries
- Use role-based access control for sensitive operations
- Monitor and log all AI interactions
- Implement rate limiting for AI requests

# Language-specific injection prevention:
${languagePatterns.injection.map(pattern => `- Avoid using: ${pattern}`).join('\n')}

# Recommended sanitization libraries:
${languagePatterns.sanitization.map(lib => `- Use: ${lib}`).join('\n')}

`;
}

function generateOutputHandlingRules(languagePatterns) {
    return `# Secure output handling
- Always validate AI-generated code before execution
- Implement code review processes for AI suggestions
- Use sandboxed environments for code testing
- Sanitize all outputs before displaying or processing
- Implement content security policies
- Use safe evaluation methods when possible
- Add timeout limits for code execution
- Log all AI-generated code for audit purposes

# Output validation patterns:
${languagePatterns.validation.map(lib => `- Use: ${lib} for validation`).join('\n')}

`;
}

function generateDataPoisoningRules() {
    return `# Training data poisoning prevention
- Use trusted and verified training data sources
- Implement data validation and verification processes
- Monitor for unusual patterns in AI responses
- Use multiple data sources for verification
- Implement data integrity checks
- Regular audits of training data quality
- Version control for training datasets
- Document all data sources and processing steps

`;
}

function generateDoSProtectionRules() {
    return `# Denial of Service protection
- Implement request rate limiting
- Add timeout limits for AI operations
- Use queue systems for long-running tasks
- Monitor resource usage and set limits
- Implement circuit breakers for AI services
- Use caching for repeated requests
- Add request size limits
- Monitor and alert on unusual traffic patterns

`;
}

function generateSupplyChainRules() {
    return `# Supply chain security
- Use only verified and trusted AI models
- Implement dependency scanning for AI libraries
- Regular security audits of AI dependencies
- Use signed and verified model packages
- Implement model integrity verification
- Monitor for known vulnerabilities in AI tools
- Use private model registries when possible
- Document all AI tool dependencies

`;
}

function generateInfoDisclosureRules() {
    return `# Information disclosure prevention
- Never include sensitive data in prompts
- Implement data classification and handling
- Use environment variables for sensitive configuration
- Implement proper logging without sensitive data
- Use encryption for sensitive data storage
- Implement access controls for AI tools
- Regular security audits of AI configurations
- Monitor for data leakage in AI responses

`;
}

function generatePluginSecurityRules() {
    return `# Plugin security (if applicable)
- Validate all plugin inputs and outputs
- Implement plugin sandboxing
- Use least privilege principle for plugin permissions
- Regular security audits of plugins
- Implement plugin signature verification
- Monitor plugin behavior and resource usage
- Use trusted plugin sources only
- Implement plugin update security processes

`;
}

function generateAgencyControlRules() {
    return `# Excessive agency prevention
- Limit AI tool permissions to minimum required
- Implement approval workflows for critical operations
- Use human oversight for sensitive operations
- Implement rollback mechanisms
- Monitor AI tool actions and decisions
- Set up alerts for unusual AI behavior
- Regular review of AI tool permissions
- Implement emergency stop mechanisms

`;
}

function generateOverrelianceRules() {
    return `# Overreliance prevention
- Always review AI-generated code manually
- Implement mandatory code review processes
- Use AI as assistance, not replacement
- Maintain human expertise and judgment
- Implement testing for AI-generated code
- Regular training on AI limitations
- Document AI tool usage and decisions
- Implement fallback procedures

`;
}

function generateModelTheftRules() {
    return `# Model theft prevention
- Implement access controls for AI models
- Use API keys and authentication
- Monitor for unusual access patterns
- Implement model watermarking
- Use rate limiting and usage quotas
- Regular security audits of model access
- Implement model versioning and tracking
- Use secure model deployment practices

`;
}

function generateProjectTypeRules(projectType, languagePatterns) {
    let rules = `## Project Type Specific Rules\n\n`;
    
    const projectRules = {
        web: `# Web Application Security
- Implement Content Security Policy (CSP)
- Use HTTPS for all communications
- Validate all user inputs on both client and server
- Implement proper session management
- Use secure authentication and authorization
- Regular security testing and penetration testing
- Implement proper error handling without information disclosure
- Use secure coding practices for web frameworks

`,
        mobile: `# Mobile Application Security
- Implement secure data storage practices
- Use certificate pinning for API communications
- Implement proper authentication mechanisms
- Secure local data storage and encryption
- Implement app integrity checks
- Use secure communication protocols
- Regular security updates and patches
- Implement proper session management

`,
        api: `# API/Backend Security
- Implement proper authentication and authorization
- Use rate limiting and throttling
- Validate all input parameters
- Implement proper error handling
- Use secure communication protocols
- Implement API versioning and deprecation
- Regular security audits and testing
- Use secure configuration management

`,
        desktop: `# Desktop Application Security
- Implement proper file system security
- Use secure communication protocols
- Implement proper authentication mechanisms
- Secure local data storage
- Implement proper error handling
- Use secure update mechanisms
- Regular security updates and patches
- Implement proper logging and monitoring

`,
        library: `# Library/Framework Security
- Implement proper input validation
- Use secure default configurations
- Provide clear security documentation
- Implement proper error handling
- Use secure coding practices
- Regular security audits and updates
- Implement proper versioning and deprecation
- Provide security best practices examples

`,
        general: `# General Purpose Security
- Implement proper input validation
- Use secure coding practices
- Implement proper error handling
- Use secure communication protocols
- Regular security audits and updates
- Implement proper logging and monitoring
- Use secure configuration management
- Implement proper authentication and authorization

`
    };
    
    rules += projectRules[projectType] || projectRules.general;
    return rules;
}

function generateLanguageSpecificRules(language, languagePatterns) {
    let rules = `## Language-Specific Security Rules\n\n`;
    
    // Check if we have Wiz baseline rules for this language/framework
    const wizRules = getWizBaselineRules(language);
    
    if (wizRules) {
        rules += `# ${wizRules.name} - Wiz Baseline Rules\n\n`;
        rules += `# ${wizRules.description}\n\n`;
        rules += `# Core Security Rules:\n`;
        wizRules.rules.forEach(rule => {
            rules += `- ${rule}\n`;
        });
        rules += `\n`;
    }
    
    rules += `# ${language.toUpperCase()} Security Best Practices\n\n`;
    rules += `# Dangerous patterns to avoid:\n`;
    languagePatterns.injection.forEach(pattern => {
        rules += `- ${pattern}\n`;
    });
    
    rules += `\n# Recommended security libraries:\n`;
    languagePatterns.sanitization.forEach(lib => {
        rules += `- ${lib}\n`;
    });
    
    rules += `\n# Input validation libraries:\n`;
    languagePatterns.validation.forEach(lib => {
        rules += `- ${lib}\n`;
    });
    
    rules += `\n# Additional language-specific recommendations:\n`;
    
    const languageSpecific = {
        javascript: `- Use strict mode ('use strict')
- Implement proper CORS policies
- Use Content Security Policy (CSP)
- Validate JSON inputs
- Use secure cookie settings
- Implement proper XSS protection
- Use HTTPS for all communications
- Implement proper CSRF protection

`,
        python: `- Use virtual environments
- Implement proper input validation
- Use secure random number generation
- Implement proper file handling
- Use secure configuration management
- Implement proper logging
- Use secure communication protocols
- Implement proper error handling

`,
        java: `- Use secure coding guidelines
- Implement proper exception handling
- Use secure random number generation
- Implement proper input validation
- Use secure communication protocols
- Implement proper logging
- Use secure configuration management
- Implement proper authentication

`,
        csharp: `- Use secure coding guidelines
- Implement proper exception handling
- Use secure random number generation
- Implement proper input validation
- Use secure communication protocols
- Implement proper logging
- Use secure configuration management
- Implement proper authentication

`,
        go: `- Use secure coding guidelines
- Implement proper error handling
- Use secure random number generation
- Implement proper input validation
- Use secure communication protocols
- Implement proper logging
- Use secure configuration management
- Implement proper authentication

`,
        rust: `- Use secure coding guidelines
- Implement proper error handling
- Use secure random number generation
- Implement proper input validation
- Use secure communication protocols
- Implement proper logging
- Use secure configuration management
- Implement proper authentication

`,
        php: `- Use secure coding guidelines
- Implement proper input validation
- Use secure random number generation
- Implement proper file handling
- Use secure communication protocols
- Implement proper logging
- Use secure configuration management
- Implement proper authentication

`,
        ruby: `- Use secure coding guidelines
- Implement proper input validation
- Use secure random number generation
- Implement proper file handling
- Use secure communication protocols
- Implement proper logging
- Use secure configuration management
- Implement proper authentication

`,
        swift: `- Use secure coding guidelines
- Implement proper error handling
- Use secure random number generation
- Implement proper input validation
- Use secure communication protocols
- Implement proper logging
- Use secure configuration management
- Implement proper authentication

`,
        kotlin: `- Use secure coding guidelines
- Implement proper exception handling
- Use secure random number generation
- Implement proper input validation
- Use secure communication protocols
- Implement proper logging
- Use secure configuration management
- Implement proper authentication

`,
        general: `- Use secure coding guidelines
- Implement proper error handling
- Use secure random number generation
- Implement proper input validation
- Use secure communication protocols
- Implement proper logging
- Use secure configuration management
- Implement proper authentication

`
    };
    
    rules += languageSpecific[language] || languageSpecific.general;
    return rules;
}

function getWizBaselineRules(language) {
    // Parse language-framework combinations
    const parts = language.split('-');
    const baseLanguage = parts[0];
    const framework = parts[1];
    
    if (WIZ_BASELINE_RULES[baseLanguage]) {
        if (framework && WIZ_BASELINE_RULES[baseLanguage][framework]) {
            return WIZ_BASELINE_RULES[baseLanguage][framework];
        } else if (WIZ_BASELINE_RULES[baseLanguage].general) {
            return WIZ_BASELINE_RULES[baseLanguage].general;
        }
    }
    
    return null;
}

function generateSetupInstructions(toolConfig, securityLevel) {
    let instructions = `## Setup Instructions\n\n`;
    instructions += `### ${toolConfig.name} Configuration\n\n`;
    instructions += toolConfig.setupInstructions[securityLevel];
    instructions += `\n\n### File Location\n`;
    instructions += `Place this configuration file in your project root directory.\n`;
    instructions += `File extension: ${toolConfig.fileExtension}\n\n`;
    
    instructions += `### Additional Security Recommendations\n\n`;
    instructions += `1. **Regular Updates**: Keep your AI tools and security rules updated\n`;
    instructions += `2. **Monitoring**: Implement logging and monitoring for AI tool usage\n`;
    instructions += `3. **Training**: Regularly train your team on AI security best practices\n`;
    instructions += `4. **Audits**: Conduct regular security audits of AI tool configurations\n`;
    instructions += `5. **Incident Response**: Have a plan for AI security incidents\n\n`;
    
    instructions += `### Support and Resources\n\n`;
    instructions += `- OWASP LLM Top 10: https://owasp.org/www-project-ai-security-and-privacy-guide/\n`;
    instructions += `- Wiz Secure Rules Files: https://github.com/wiz-sec-public/secure-rules-files\n`;
    instructions += `- AI Security Best Practices: https://ai-security.org/\n`;
    instructions += `- Secure AI Development: https://secure-ai.dev/\n\n`;
    
    instructions += `---\n`;
    instructions += `Generated on: ${new Date().toISOString()}\n`;
    instructions += `Security Level: ${SECURITY_LEVELS[securityLevel].name}\n`;
    instructions += `Tool: ${toolConfig.name}\n`;
    instructions += `SnowWhiteDad - 2025 <a href="https://github.com/SnowWhiteDad/prompt-rules">GitHub </a>\n`;
    
    return instructions;
}

function formatRulesForDisplay(rules) {
    // Convert markdown-style rules to HTML for display
    let html = rules
        .replace(/^# (.*$)/gim, '<h4>$1</h4>')
        .replace(/^## (.*$)/gim, '<h4 style="color: #667eea; margin-top: 1.5rem;">$1</h4>')
        .replace(/^### (.*$)/gim, '<h4 style="color: #4a5568; margin-top: 1rem;">$1</h4>')
        .replace(/^- (.*$)/gim, '<div class="rule-item">• $1</div>')
        .replace(/\n\n/g, '<br><br>')
        .replace(/\n/g, '<br>');
    
    return html;
}

function copyRules() {
    if (!currentRules) return;
    
    navigator.clipboard.writeText(currentRules).then(() => {
        const button = document.getElementById('copyRules');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.style.background = '#48bb78';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy rules:', err);
        alert('Failed to copy rules to clipboard. Please select and copy manually.');
    });
}

function downloadRules() {
    if (!currentRules || !selectedTool) return;
    
    const toolConfig = TOOL_CONFIGS[selectedTool];
    const securityLevel = document.getElementById('securityLevel').value;
    const projectType = document.getElementById('projectType').value;
    const language = document.getElementById('language').value;
    
    const filename = `${projectType}-${language}-${securityLevel}-security-rules${toolConfig.fileExtension}`;
    
    const blob = new Blob([currentRules], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show success message
    const button = document.getElementById('downloadRules');
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
    button.style.background = '#48bb78';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
    }, 2000);
} 