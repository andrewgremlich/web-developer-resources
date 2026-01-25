#!/bin/bash

# Hugo Content Creator Script
# Creates new content files with metadata from existing categories

CONTENT_DIR="content/web-developer-resources"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Function to display usage
usage() {
    echo -e "${CYAN}Usage:${NC} $0 -t <title> -u <url>"
    echo ""
    echo "Options:"
    echo "  -t, --title    Title of the content (required)"
    echo "  -u, --url      Original URL of the resource (required)"
    echo "  -h, --help     Show this help message"
    echo ""
    echo "Example:"
    echo "  $0 -t \"My Awesome Resource\" -u \"https://example.com\""
    exit 1
}

# Parse command line arguments
TITLE=""
URL=""

while [[ $# -gt 0 ]]; do
    case $1 in
        -t|--title)
            TITLE="$2"
            shift 2
            ;;
        -u|--url)
            URL="$2"
            shift 2
            ;;
        -h|--help)
            usage
            ;;
        *)
            echo -e "${RED}Error: Unknown option $1${NC}"
            usage
            ;;
    esac
done

# Validate required arguments
if [[ -z "$TITLE" ]]; then
    echo -e "${RED}Error: Title is required${NC}"
    usage
fi

if [[ -z "$URL" ]]; then
    echo -e "${RED}Error: URL is required${NC}"
    usage
fi

# Get script directory (works even if script is called from another directory)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FULL_CONTENT_DIR="$SCRIPT_DIR/$CONTENT_DIR"

# Check if content directory exists
if [[ ! -d "$FULL_CONTENT_DIR" ]]; then
    echo -e "${RED}Error: Content directory not found: $FULL_CONTENT_DIR${NC}"
    exit 1
fi

# Extract unique categories from existing content files
echo -e "${CYAN}Scanning existing categories...${NC}"

# Find all markdown files and extract categories
CATEGORIES=()
while IFS= read -r category; do
    [[ -n "$category" ]] && CATEGORIES+=("$category")
done < <(find "$FULL_CONTENT_DIR" -name "*.md" -exec grep -h "^categories:" {} \; 2>/dev/null | \
    sed 's/categories: \[//' | \
    sed 's/\]$//' | \
    sed 's/", "/\n/g' | \
    sed 's/^"//' | \
    sed 's/"$//' | \
    sort -u)

if [[ ${#CATEGORIES[@]} -eq 0 ]]; then
    echo -e "${YELLOW}No existing categories found. You can enter a new one.${NC}"
fi

# Display categories for selection
echo ""
echo -e "${GREEN}Available categories:${NC}"
echo ""

for i in "${!CATEGORIES[@]}"; do
    printf "  %3d) %s\n" $((i + 1)) "${CATEGORIES[$i]}"
done

echo ""
echo -e "  ${YELLOW}  0) Enter a new category${NC}"
echo ""

# Get category selection
while true; do
    read -p "Select a category number (or 0 for new): " SELECTION

    if [[ "$SELECTION" =~ ^[0-9]+$ ]]; then
        if [[ "$SELECTION" -eq 0 ]]; then
            read -p "Enter new category name: " SELECTED_CATEGORY
            if [[ -z "$SELECTED_CATEGORY" ]]; then
                echo -e "${RED}Category cannot be empty${NC}"
                continue
            fi
            break
        elif [[ "$SELECTION" -ge 1 && "$SELECTION" -le ${#CATEGORIES[@]} ]]; then
            SELECTED_CATEGORY="${CATEGORIES[$((SELECTION - 1))]}"
            break
        fi
    fi
    echo -e "${RED}Invalid selection. Please try again.${NC}"
done

echo ""
echo -e "${GREEN}Selected category: ${SELECTED_CATEGORY}${NC}"

# Generate filename from title (slug)
FILENAME=$(echo "$TITLE" | \
    tr '[:upper:]' '[:lower:]' | \
    sed 's/[^a-z0-9]/-/g' | \
    sed 's/--*/-/g' | \
    sed 's/^-//' | \
    sed 's/-$//')

FILENAME="${FILENAME}.md"
FILEPATH="$FULL_CONTENT_DIR/$FILENAME"

# Check if file already exists
if [[ -f "$FILEPATH" ]]; then
    echo -e "${YELLOW}Warning: File already exists: $FILEPATH${NC}"
    read -p "Overwrite? (y/N): " CONFIRM
    if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
        echo -e "${RED}Aborted.${NC}"
        exit 1
    fi
fi

# Generate current timestamp in ISO format
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%S.000Z")

# Create the content file
cat > "$FILEPATH" << EOF
---
title: "$TITLE"
date: "$TIMESTAMP"
lastmod: "$TIMESTAMP"
categories: ["$SELECTED_CATEGORY"]
original_url: "$URL"
draft: false
---

EOF

echo ""
echo -e "${GREEN}Content file created successfully!${NC}"
echo -e "${CYAN}File: ${FILEPATH}${NC}"
echo ""
echo -e "Frontmatter:"
echo -e "  Title:    $TITLE"
echo -e "  Date:     $TIMESTAMP"
echo -e "  Category: $SELECTED_CATEGORY"
echo -e "  URL:      $URL"
