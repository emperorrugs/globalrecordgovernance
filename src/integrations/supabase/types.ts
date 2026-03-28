export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      access_requests: {
        Row: {
          country: string
          created_at: string
          crp_acknowledged: boolean
          department_type: string | null
          document_categories: string[] | null
          email: string
          email_verified: boolean
          evaluation_purpose: string
          full_name: string
          id: string
          jurisdiction: string | null
          nda_required: boolean
          organization: string
          purpose_detail: string | null
          requested_level: string
          reviewer_notes: string | null
          status: string
          title_role: string
          updated_at: string
          verification_expires_at: string | null
          verification_token: string | null
        }
        Insert: {
          country: string
          created_at?: string
          crp_acknowledged?: boolean
          department_type?: string | null
          document_categories?: string[] | null
          email: string
          email_verified?: boolean
          evaluation_purpose: string
          full_name: string
          id?: string
          jurisdiction?: string | null
          nda_required?: boolean
          organization: string
          purpose_detail?: string | null
          requested_level: string
          reviewer_notes?: string | null
          status?: string
          title_role: string
          updated_at?: string
          verification_expires_at?: string | null
          verification_token?: string | null
        }
        Update: {
          country?: string
          created_at?: string
          crp_acknowledged?: boolean
          department_type?: string | null
          document_categories?: string[] | null
          email?: string
          email_verified?: boolean
          evaluation_purpose?: string
          full_name?: string
          id?: string
          jurisdiction?: string | null
          nda_required?: boolean
          organization?: string
          purpose_detail?: string | null
          requested_level?: string
          reviewer_notes?: string | null
          status?: string
          title_role?: string
          updated_at?: string
          verification_expires_at?: string | null
          verification_token?: string | null
        }
        Relationships: []
      }
      approvals: {
        Row: {
          approver_id: string
          decided_at: string
          decision: string
          id: string
          notes: string | null
          record_id: string
        }
        Insert: {
          approver_id: string
          decided_at?: string
          decision: string
          id?: string
          notes?: string | null
          record_id: string
        }
        Update: {
          approver_id?: string
          decided_at?: string
          decision?: string
          id?: string
          notes?: string | null
          record_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "approvals_record_id_fkey"
            columns: ["record_id"]
            isOneToOne: false
            referencedRelation: "records"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action_type: string
          after_json: Json | null
          before_json: Json | null
          entity_id: string | null
          entity_type: string
          id: string
          integrity_hash: string | null
          ip_address: string | null
          occurred_at: string
          tenant_id: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action_type: string
          after_json?: Json | null
          before_json?: Json | null
          entity_id?: string | null
          entity_type: string
          id?: string
          integrity_hash?: string | null
          ip_address?: string | null
          occurred_at?: string
          tenant_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action_type?: string
          after_json?: Json | null
          before_json?: Json | null
          entity_id?: string | null
          entity_type?: string
          id?: string
          integrity_hash?: string | null
          ip_address?: string | null
          occurred_at?: string
          tenant_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_logs_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      authority_contexts: {
        Row: {
          authority_type: string
          created_at: string
          delegated_from: string | null
          id: string
          is_active: boolean
          legal_basis: string | null
          name: string
          organization_id: string
          valid_from: string | null
          valid_until: string | null
        }
        Insert: {
          authority_type: string
          created_at?: string
          delegated_from?: string | null
          id?: string
          is_active?: boolean
          legal_basis?: string | null
          name: string
          organization_id: string
          valid_from?: string | null
          valid_until?: string | null
        }
        Update: {
          authority_type?: string
          created_at?: string
          delegated_from?: string | null
          id?: string
          is_active?: boolean
          legal_basis?: string | null
          name?: string
          organization_id?: string
          valid_from?: string | null
          valid_until?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "authority_contexts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      dispute_events: {
        Row: {
          actor_id: string
          dispute_id: string
          event_type: string
          evidence_url: string | null
          id: string
          notes: string | null
          occurred_at: string
        }
        Insert: {
          actor_id: string
          dispute_id: string
          event_type: string
          evidence_url?: string | null
          id?: string
          notes?: string | null
          occurred_at?: string
        }
        Update: {
          actor_id?: string
          dispute_id?: string
          event_type?: string
          evidence_url?: string | null
          id?: string
          notes?: string | null
          occurred_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "dispute_events_dispute_id_fkey"
            columns: ["dispute_id"]
            isOneToOne: false
            referencedRelation: "disputes"
            referencedColumns: ["id"]
          },
        ]
      }
      disputes: {
        Row: {
          id: string
          raised_at: string
          raised_by: string
          reason: string
          record_id: string
          resolution: string | null
          resolved_at: string | null
          resolved_by: string | null
          status: string
        }
        Insert: {
          id?: string
          raised_at?: string
          raised_by: string
          reason: string
          record_id: string
          resolution?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          status?: string
        }
        Update: {
          id?: string
          raised_at?: string
          raised_by?: string
          reason?: string
          record_id?: string
          resolution?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "disputes_record_id_fkey"
            columns: ["record_id"]
            isOneToOne: false
            referencedRelation: "records"
            referencedColumns: ["id"]
          },
        ]
      }
      jurisdictions: {
        Row: {
          code: string
          country: string | null
          created_at: string
          id: string
          is_active: boolean
          level: string
          name: string
          parent_id: string | null
        }
        Insert: {
          code: string
          country?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          level?: string
          name: string
          parent_id?: string | null
        }
        Update: {
          code?: string
          country?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          level?: string
          name?: string
          parent_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "jurisdictions_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "jurisdictions"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          is_read: boolean
          link: string | null
          message: string | null
          title: string
          type: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          link?: string | null
          message?: string | null
          title: string
          type?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean
          link?: string | null
          message?: string | null
          title?: string
          type?: string | null
          user_id?: string
        }
        Relationships: []
      }
      organizations: {
        Row: {
          country: string | null
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          logo_url: string | null
          name: string
          org_type: string
          settings: Json | null
          slug: string
          updated_at: string
        }
        Insert: {
          country?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          logo_url?: string | null
          name: string
          org_type?: string
          settings?: Json | null
          slug: string
          updated_at?: string
        }
        Update: {
          country?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          logo_url?: string | null
          name?: string
          org_type?: string
          settings?: Json | null
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      policy_templates: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          name: string
          sector_id: string | null
          template_json: Json
          version: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          name: string
          sector_id?: string | null
          template_json?: Json
          version?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          name?: string
          sector_id?: string | null
          template_json?: Json
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "policy_templates_sector_id_fkey"
            columns: ["sector_id"]
            isOneToOne: false
            referencedRelation: "sectors"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          is_active: boolean
          job_title: string | null
          organization_id: string | null
          phone: string | null
          timezone: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          is_active?: boolean
          job_title?: string | null
          organization_id?: string | null
          phone?: string | null
          timezone?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          is_active?: boolean
          job_title?: string | null
          organization_id?: string | null
          phone?: string | null
          timezone?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      record_attachments: {
        Row: {
          file_hash: string | null
          file_name: string
          file_size: number | null
          file_type: string | null
          id: string
          record_id: string
          storage_path: string
          uploaded_at: string
          uploaded_by: string
        }
        Insert: {
          file_hash?: string | null
          file_name: string
          file_size?: number | null
          file_type?: string | null
          id?: string
          record_id: string
          storage_path: string
          uploaded_at?: string
          uploaded_by: string
        }
        Update: {
          file_hash?: string | null
          file_name?: string
          file_size?: number | null
          file_type?: string | null
          id?: string
          record_id?: string
          storage_path?: string
          uploaded_at?: string
          uploaded_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "record_attachments_record_id_fkey"
            columns: ["record_id"]
            isOneToOne: false
            referencedRelation: "records"
            referencedColumns: ["id"]
          },
        ]
      }
      record_events: {
        Row: {
          actor_id: string | null
          description: string | null
          event_type: string
          id: string
          metadata: Json | null
          occurred_at: string
          record_id: string
        }
        Insert: {
          actor_id?: string | null
          description?: string | null
          event_type: string
          id?: string
          metadata?: Json | null
          occurred_at?: string
          record_id: string
        }
        Update: {
          actor_id?: string | null
          description?: string | null
          event_type?: string
          id?: string
          metadata?: Json | null
          occurred_at?: string
          record_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "record_events_record_id_fkey"
            columns: ["record_id"]
            isOneToOne: false
            referencedRelation: "records"
            referencedColumns: ["id"]
          },
        ]
      }
      record_hashes: {
        Row: {
          created_at: string
          hash_algorithm: string
          hash_value: string
          id: string
          payload_snapshot: Json | null
          previous_hash: string | null
          record_id: string
        }
        Insert: {
          created_at?: string
          hash_algorithm?: string
          hash_value: string
          id?: string
          payload_snapshot?: Json | null
          previous_hash?: string | null
          record_id: string
        }
        Update: {
          created_at?: string
          hash_algorithm?: string
          hash_value?: string
          id?: string
          payload_snapshot?: Json | null
          previous_hash?: string | null
          record_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "record_hashes_record_id_fkey"
            columns: ["record_id"]
            isOneToOne: false
            referencedRelation: "records"
            referencedColumns: ["id"]
          },
        ]
      }
      record_types: {
        Row: {
          code: string
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          metadata_schema: Json | null
          name: string
          sector_id: string
        }
        Insert: {
          code: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          metadata_schema?: Json | null
          name: string
          sector_id: string
        }
        Update: {
          code?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          metadata_schema?: Json | null
          name?: string
          sector_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "record_types_sector_id_fkey"
            columns: ["sector_id"]
            isOneToOne: false
            referencedRelation: "sectors"
            referencedColumns: ["id"]
          },
        ]
      }
      records: {
        Row: {
          actor_ref: string | null
          archived_at: string | null
          authority_context_id: string | null
          confidentiality_level: Database["public"]["Enums"]["confidentiality_level"]
          created_at: string
          created_by: string
          current_hash: string | null
          description: string | null
          event_type: string | null
          id: string
          jurisdiction_id: string | null
          manifest_json: Json | null
          metadata: Json | null
          occurred_at: string | null
          previous_hash: string | null
          public_verifiable: boolean
          record_type_id: string
          recorded_at: string
          retention_class: Database["public"]["Enums"]["retention_class"]
          sealed_at: string | null
          sector_id: string
          status: Database["public"]["Enums"]["record_status"]
          subject_ref: string | null
          tenant_id: string
          timezone: string | null
          title: string
          updated_at: string
          updated_by: string | null
          verification_token: string | null
        }
        Insert: {
          actor_ref?: string | null
          archived_at?: string | null
          authority_context_id?: string | null
          confidentiality_level?: Database["public"]["Enums"]["confidentiality_level"]
          created_at?: string
          created_by: string
          current_hash?: string | null
          description?: string | null
          event_type?: string | null
          id?: string
          jurisdiction_id?: string | null
          manifest_json?: Json | null
          metadata?: Json | null
          occurred_at?: string | null
          previous_hash?: string | null
          public_verifiable?: boolean
          record_type_id: string
          recorded_at?: string
          retention_class?: Database["public"]["Enums"]["retention_class"]
          sealed_at?: string | null
          sector_id: string
          status?: Database["public"]["Enums"]["record_status"]
          subject_ref?: string | null
          tenant_id: string
          timezone?: string | null
          title: string
          updated_at?: string
          updated_by?: string | null
          verification_token?: string | null
        }
        Update: {
          actor_ref?: string | null
          archived_at?: string | null
          authority_context_id?: string | null
          confidentiality_level?: Database["public"]["Enums"]["confidentiality_level"]
          created_at?: string
          created_by?: string
          current_hash?: string | null
          description?: string | null
          event_type?: string | null
          id?: string
          jurisdiction_id?: string | null
          manifest_json?: Json | null
          metadata?: Json | null
          occurred_at?: string | null
          previous_hash?: string | null
          public_verifiable?: boolean
          record_type_id?: string
          recorded_at?: string
          retention_class?: Database["public"]["Enums"]["retention_class"]
          sealed_at?: string | null
          sector_id?: string
          status?: Database["public"]["Enums"]["record_status"]
          subject_ref?: string | null
          tenant_id?: string
          timezone?: string | null
          title?: string
          updated_at?: string
          updated_by?: string | null
          verification_token?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "records_authority_context_id_fkey"
            columns: ["authority_context_id"]
            isOneToOne: false
            referencedRelation: "authority_contexts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "records_jurisdiction_id_fkey"
            columns: ["jurisdiction_id"]
            isOneToOne: false
            referencedRelation: "jurisdictions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "records_record_type_id_fkey"
            columns: ["record_type_id"]
            isOneToOne: false
            referencedRelation: "record_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "records_sector_id_fkey"
            columns: ["sector_id"]
            isOneToOne: false
            referencedRelation: "sectors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "records_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      sectors: {
        Row: {
          code: string
          created_at: string
          description: string | null
          display_order: number
          icon: string | null
          id: string
          is_active: boolean
          name: string
        }
        Insert: {
          code: string
          created_at?: string
          description?: string | null
          display_order?: number
          icon?: string | null
          id?: string
          is_active?: boolean
          name: string
        }
        Update: {
          code?: string
          created_at?: string
          description?: string | null
          display_order?: number
          icon?: string | null
          id?: string
          is_active?: boolean
          name?: string
        }
        Relationships: []
      }
      tenant_settings: {
        Row: {
          id: string
          organization_id: string
          settings: Json
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          settings?: Json
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          settings?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          granted_at: string
          granted_by: string | null
          id: string
          organization_id: string | null
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          granted_at?: string
          granted_by?: string | null
          id?: string
          organization_id?: string | null
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          granted_at?: string
          granted_by?: string | null
          id?: string
          organization_id?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      verification_logs: {
        Row: {
          checked_at: string
          id: string
          metadata: Json | null
          record_id: string
          verification_result: string
          verifier_ip: string | null
        }
        Insert: {
          checked_at?: string
          id?: string
          metadata?: Json | null
          record_id: string
          verification_result: string
          verifier_ip?: string | null
        }
        Update: {
          checked_at?: string
          id?: string
          metadata?: Json | null
          record_id?: string
          verification_result?: string
          verifier_ip?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "verification_logs_record_id_fkey"
            columns: ["record_id"]
            isOneToOne: false
            referencedRelation: "records"
            referencedColumns: ["id"]
          },
        ]
      }
      verification_receipts: {
        Row: {
          hash_at_seal: string
          id: string
          issued_at: string
          issued_by: string | null
          manifest_at_seal: Json | null
          receipt_token: string
          record_id: string
        }
        Insert: {
          hash_at_seal: string
          id?: string
          issued_at?: string
          issued_by?: string | null
          manifest_at_seal?: Json | null
          receipt_token?: string
          record_id: string
        }
        Update: {
          hash_at_seal?: string
          id?: string
          issued_at?: string
          issued_by?: string | null
          manifest_at_seal?: Json | null
          receipt_token?: string
          record_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "verification_receipts_record_id_fkey"
            columns: ["record_id"]
            isOneToOne: false
            referencedRelation: "records"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_org: { Args: { _user_id: string }; Returns: string }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role:
        | "super_admin"
        | "federation_regulator"
        | "tenant_admin"
        | "approver"
        | "records_officer"
        | "auditor"
        | "reviewer"
        | "public_verifier"
        | "observer"
      confidentiality_level:
        | "public"
        | "internal"
        | "confidential"
        | "restricted"
        | "top_secret"
      record_status:
        | "draft"
        | "submitted"
        | "under_review"
        | "approved"
        | "sealed"
        | "disputed"
        | "superseded"
        | "revoked"
        | "archived"
      retention_class:
        | "temporary"
        | "short_term"
        | "medium_term"
        | "long_term"
        | "permanent"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: [
        "super_admin",
        "federation_regulator",
        "tenant_admin",
        "approver",
        "records_officer",
        "auditor",
        "reviewer",
        "public_verifier",
        "observer",
      ],
      confidentiality_level: [
        "public",
        "internal",
        "confidential",
        "restricted",
        "top_secret",
      ],
      record_status: [
        "draft",
        "submitted",
        "under_review",
        "approved",
        "sealed",
        "disputed",
        "superseded",
        "revoked",
        "archived",
      ],
      retention_class: [
        "temporary",
        "short_term",
        "medium_term",
        "long_term",
        "permanent",
      ],
    },
  },
} as const
