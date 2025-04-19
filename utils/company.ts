export interface Company {
    id: string;
    name: string;
    slug: string;
    former_names?: string[];
    small_logo_thumb_url?: string;
    website?: string;
    all_locations?: string;
    long_description?: string;
    one_liner?: string;
    team_size?: number;
    industry?: string;
    subindustry?: string;
    launched_at?: number;
    tags?: string[];
    tags_highlighted?: string[];
    top_company?: boolean;
    isHiring?: boolean;
    nonprofit?: boolean;
    batch?: string; // e.g. "W22"
    status?: string;
    industries?: string[];
    regions?: string[];
    stage?: string;
    app_video_public?: boolean;
    demo_day_video_public?: boolean;
    app_answers?: any | null;
    question_answers?: boolean;
    objectID?: string;
    _highlightResult?: {
      name?: HighlightResult;
      former_names?: HighlightResult[];
      website?: HighlightResult;
      all_locations?: HighlightResult;
      long_description?: HighlightResult;
      one_liner?: HighlightResult;
      tags?: HighlightResult[];
    };
    jobPostings?: any[];
    socialLinks?: {
      [key: string]: string;
    };
    founders?: Founder[];
  }
  
  interface HighlightResult {
    value: string;
    matchLevel: string;
    matchedWords: string[];
  }
  
  interface Founder {
    user_id: number;
    is_active: boolean;
    founder_bio?: string;
    full_name: string;
    title: string | null;
    avatar_thumb_url?: string;
    twitter_url?: string;
    linkedin_url?: string;
    latest_yc_company?: {
      name: string;
      href: string;
    };
  }