<div align="center">

# 🚀 Nexus AI
### *Intelligent Document Analysis & Annotation Platform*

*Transform your PDF workflow with AI-powered conversations, advanced annotations, and comprehensive document analysis*

![Nexus AI Interface]([Interface.png](https://github.com/Ridhyansh/chatpdf/blob/main/nexus-ai-main/Interface.png))

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.12+-blue.svg)](https://www.python.org/downloads/)
[![Node.js](https://img.shields.io/badge/Node.js-15+-green.svg)](https://nodejs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104+-009688.svg)](https://fastapi.tiangolo.com/)
[![Next.js](https://img.shields.io/badge/Next.js-13+-black.svg)](https://nextjs.org/)

</div>

---

## ✨ Key Features

### 🤖 **AI-Powered Document Conversations**
- **Intelligent Chat**: Have natural conversations with your PDF documents using Google's Gemini 1.5 Flash
- **Context-Aware Responses**: AI understands document context for accurate, relevant answers
- **Multi-Document Support**: Upload and chat with multiple PDFs simultaneously
- **Real-time Processing**: Fast response times with optimized text extraction and caching

### 🎨 **Advanced PDF Annotation Tools**
- **Drawing Tools**: Pen, highlighter, shapes (rectangles, circles, arrows, lines)
- **Text Annotations**: Comments, sticky notes, typewriter text
- **Professional Stamps**: Approved, rejected, draft, final stamps
- **Customizable Styles**: Adjustable colors, stroke widths, and transparency
- **Layer Management**: Organize annotations in separate layers

### 📄 **Document Management & Processing**
- **Drag & Drop Upload**: Intuitive file upload with visual feedback
- **PDF Rendering**: High-quality PDF display with zoom and navigation
- **Text Extraction**: Advanced OCR and text processing capabilities
- **Document Comparison**: Side-by-side comparison of PDF versions
- **Export Options**: Save annotated PDFs with all markups preserved

### 🔐 **Security & Authentication**
- **User Authentication**: Secure login and signup with JWT tokens
- **Data Privacy**: Local document processing with secure file handling
- **Access Control**: User-specific document access and permissions
- **Encrypted Communication**: HTTPS and secure API endpoints

### 🎯 **User Experience**
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Collaboration**: Share and collaborate on document annotations
- **Keyboard Shortcuts**: Efficient workflow with hotkey support
- **Dark/Light Mode**: Customizable interface themes
- **Progress Tracking**: Visual indicators for upload and processing status

---

## 🛠️ Technology Stack

<div align="center">

| **Frontend** | **Backend** | **AI/ML** | **Database** |
|:------------:|:-----------:|:---------:|:------------:|
| ![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js) | ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi) | ![Google AI](https://img.shields.io/badge/Gemini-4285F4?style=for-the-badge&logo=google) | ![ChromaDB](https://img.shields.io/badge/ChromaDB-FF6B6B?style=for-the-badge) |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) | ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) | ![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge) | ![Vector Store](https://img.shields.io/badge/Vector_Store-8B5CF6?style=for-the-badge) |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | ![PyMuPDF](https://img.shields.io/badge/PyMuPDF-FF4B4B?style=for-the-badge) | ![Embeddings](https://img.shields.io/badge/Embeddings-FF9500?style=for-the-badge) | | |
| ![React PDF](https://img.shields.io/badge/React_PDF-61DAFB?style=for-the-badge&logo=react) | ![Pydantic](https://img.shields.io/badge/Pydantic-E92063?style=for-the-badge) | | | |
| ![Fabric.js](https://img.shields.io/badge/Fabric.js-FF6B6B?style=for-the-badge) | ![Uvicorn](https://img.shields.io/badge/Uvicorn-4051B5?style=for-the-badge) | | | |

</div>

---

## 🚀 Quick Start Guide

### 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.12+** - [Download Python](https://www.python.org/downloads/)
- **Node.js 15+** - [Download Node.js](https://nodejs.org/)
- **Google AI API Key** - [Get API Key](https://aistudio.google.com/app/apikey)

### 🔧 Installation

#### 1. **Clone the Repository**
```bash
git clone https://github.com/imfeniljikadara/nexus-ai.git
cd nexus-ai
```

#### 2. **Backend Setup**
```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

#### 3. **Frontend Setup**
```bash
cd frontend

# Install dependencies
npm install
# or
yarn install
```

#### 4. **Environment Configuration**

Create a `.env` file in the `backend` directory:
```env
GOOGLE_API_KEY=your_google_ai_api_key_here
CHROMA_PERSIST_DIR=./chroma_db
PUBLIC_BACKEND_BASE=http://localhost:8000
JWT_SECRET_KEY=your_jwt_secret_key_here
```

Create a `.env.local` file in the `frontend` directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

#### 5. **Launch the Application**

**Terminal 1 - Backend Server:**
```bash
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 - Frontend Development Server:**
```bash
cd frontend
npm run dev
```

#### 6. **Access the Application**

Open your browser and navigate to: **[http://localhost:3000](http://localhost:3000)**

---

## 📁 Project Architecture

```
nexus-ai/
├── 📂 backend/                    # FastAPI Backend Server
│   ├── 🐍 main.py                # Main application entry point
│   ├── 📂 services/              # Business logic modules
│   │   ├── 🔐 auth_service.py    # Authentication & user management
│   │   ├── 💬 chat_service.py    # AI chat processing
│   │   └── 📄 pdf_service.py     # PDF processing utilities
│   ├── 📂 temp/                  # Uploaded file storage
│   └── 📋 requirements.txt       # Python dependencies
│
├── 📂 frontend/                   # Next.js Frontend Application
│   ├── 📂 components/            # Reusable React components
│   │   ├── 🎨 AnnotationToolbar.tsx  # Annotation tools UI
│   │   ├── 💬 ChatBox.tsx        # AI chat interface
│   │   ├── 🖌️ DrawingToolbar.tsx  # Drawing tools panel
│   │   ├── 📄 PDFViewer.tsx      # PDF display component
│   │   └── 📱 Sidebar.tsx        # Navigation sidebar
│   ├── 📂 pages/                 # Next.js pages & API routes
│   │   ├── 🏠 index.tsx          # Main application page
│   │   ├── 📂 api/               # Backend API integrations
│   │   └── 📂 auth/              # Authentication pages
│   ├── 📂 types/                 # TypeScript type definitions
│   ├── 📂 styles/                # Global CSS styles
│   └── 📋 package.json           # Node.js dependencies
│
├── 📂 pdf_chat/                  # Additional chat modules
│   ├── 🧠 services/              # AI processing services
│   │   ├── 🔮 embeddings.py      # Text embeddings
│   │   ├── 🤖 llm.py             # Language model interface
│   │   ├── 📄 pdf_processor.py   # PDF text extraction
│   │   └── 🗃️ vector_store.py    # Vector database operations
│   └── 📂 tests/                 # Unit tests
│
├── 🖼️ Interface.png             # Application interface screenshot
├── 📋 requirements.txt           # Global Python dependencies
├── 📋 package.json              # Global Node.js configuration
└── 📄 README.md                 # This documentation
```

---

## 🎯 Usage Guide

### 📤 **Uploading Documents**
1. Click the **"Upload PDF"** button or drag & drop files into the upload area
2. Wait for the processing indicator to complete
3. Your document will appear in the PDF viewer

### 💬 **AI Chat Conversations**
1. Click the **"Chat with AI"** button in the bottom-right corner
2. Type your questions about the document in natural language
3. Get intelligent, context-aware responses from Gemini AI
4. Continue the conversation to dive deeper into document content

### 🎨 **Document Annotation**
1. Click the **"Annotate"** button to activate annotation mode
2. Choose from various tools:
   - **Pen**: Freehand drawing
   - **Highlighter**: Highlight important text
   - **Shapes**: Rectangles, circles, arrows, lines
   - **Text**: Comments, sticky notes, typed text
   - **Stamps**: Professional approval stamps
3. Customize colors, stroke width, and opacity
4. Save your annotations to preserve markups

### 🔄 **Document Comparison**
1. Upload two versions of a document
2. Use the **"Compare"** feature to identify differences
3. View highlighted changes and modifications
4. Export comparison reports

---

## 🎨 Features in Detail

### **AI Chat Engine**
- **Advanced NLP**: Powered by Google's Gemini 1.5 Flash model
- **Contextual Understanding**: Maintains conversation context across multiple queries
- **Document Awareness**: References specific sections and pages in responses
- **Multi-language Support**: Understands and responds in multiple languages

### **Annotation System**
- **Vector-based Drawing**: Scalable annotations that maintain quality at any zoom level
- **Collaborative Editing**: Real-time annotation sharing (coming soon)
- **Export Formats**: Save as annotated PDF, PNG, or SVG
- **Undo/Redo**: Full editing history with unlimited undo

### **PDF Processing**
- **High-fidelity Rendering**: Crisp, accurate PDF display
- **Text Extraction**: Advanced OCR for scanned documents
- **Metadata Preservation**: Maintains original document properties
- **Optimization**: Efficient loading for large documents

---

## 🔧 Configuration Options

### **Backend Configuration**
```python
# main.py - Customize CORS origins
origins = [
    "http://localhost:3000",
    "https://your-production-domain.com"
]

# Adjust upload limits and timeout settings
MAX_FILE_SIZE = 50 * 1024 * 1024  # 50MB
CHAT_TIMEOUT = 120  # seconds
```

### **Frontend Configuration**
```typescript
// next.config.js - Custom webpack configuration
module.exports = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  }
}
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### **Development Setup**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Install dependencies and run tests
4. Make your changes and commit: `git commit -m 'Add amazing feature'`
5. Push to your branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### **Contribution Guidelines**
- Follow the existing code style and conventions
- Add tests for new features
- Update documentation for any API changes
- Ensure all tests pass before submitting

### **Bug Reports**
- Use the GitHub Issues template
- Include detailed reproduction steps
- Provide system information and browser details

---

## 📈 Roadmap

### **Upcoming Features**
- [ ] **Real-time Collaboration**: Multi-user annotation editing
- [ ] **Advanced AI Models**: Support for additional language models
- [ ] **Mobile App**: Native iOS and Android applications
- [ ] **Document Templates**: Pre-built annotation templates
- [ ] **API Integrations**: Connect with cloud storage providers
- [ ] **Workflow Automation**: Automated document processing pipelines

### **Performance Improvements**
- [ ] **Caching Optimization**: Enhanced document caching strategies
- [ ] **Lazy Loading**: Progressive document loading for large files
- [ ] **WebAssembly**: WASM-based PDF processing for better performance

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **MIT License Summary**
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

---

## 🙏 Acknowledgments

We thank the following technologies and communities that made this project possible:

- **[Google AI](https://ai.google.dev/)** - For the powerful Gemini language model
- **[LangChain](https://langchain.com/)** - For document processing capabilities
- **[ChromaDB](https://www.trychroma.com/)** - For efficient vector storage
- **[Next.js](https://nextjs.org/)** - For the amazing React framework
- **[FastAPI](https://fastapi.tiangolo.com/)** - For the high-performance backend
- **[Fabric.js](http://fabricjs.com/)** - For canvas-based annotations
- **[React PDF](https://react-pdf.org/)** - For PDF rendering capabilities

---

## 📞 Support & Contact

### **Get Help**
- 📚 **Documentation**: Comprehensive guides and API references
- 💬 **Community**: Join our Discord server for discussions
- 🐛 **Bug Reports**: GitHub Issues for bug tracking
- 💡 **Feature Requests**: Share your ideas and suggestions

### **Professional Support**
For enterprise support and custom integrations, please contact our team.

---

<div align="center">

**Built with ❤️ by the Nexus AI Team**

*Empowering document workflows with artificial intelligence*

</div>
